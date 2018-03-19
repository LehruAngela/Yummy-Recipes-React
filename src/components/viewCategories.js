import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {notify} from 'react-notify-toast';
import Pagination from './pagination';
import {Navbar} from './navbar';
import CreateCategory from './createCategory';
import EditCategory from './editCategory';
import {BASE_URL} from '../baseUrl';

export class ViewCategory extends React.Component {
  state = {
    categories: [],
    q: "",
    page:"",
    per_page:9,
    total:"",
  }

  handleViewCategory =()=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    axios.get(`${BASE_URL}/api-v1/categories/`, {headers})
         .then(response => {
           this.setState({categories:response.data.results, page:response.data.page, total:response.data.total})
          })
          .catch(error => {
          if (error.response){
             notify.show('You have no categories', 'success', 3000)
              }
          else if(error.request){
              alert('Request not made')
              }
          });
    }
  componentDidMount() {
    this.handleViewCategory();
  }
   
  handleInputChange =(event)=>{
    const {name, value} = event.target;
    this.setState({[name]:value})
    }

  handleViewCategoryBySearch =(event)=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`}
    event.preventDefault();
    const q = event.target.q.value
    axios.get(`${BASE_URL}/api-v1/categories/?q=${q}`, {headers})
         .then(response => {
           this.setState({categories:response.data.results})
          })
          .catch(error => {
          if (error.response){
              alert(error.response.data.message)
              }
          else if(error.request){
              alert('Request not made')
              }
          });
    }  

  handleDeleteCategory =(cat_id)=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    axios.delete(`${BASE_URL}/api-v1/categories/${cat_id}`, {headers})
         .then(response => {
          notify.show('Category deleted successfully', 'success', 4000);
          if (this.state.categories.length === 1) {
            this.setState({ categories: [] });
          }
          else {
            this.handleViewCategory();
          }
          })
          .catch(error => {
          if (error.response){
              alert(error.response.data.message)
              }
          else if(error.request){
              alert('Request not made')
              }
          });
    }

    handlePageChange = (event, per_page,page) => {
      event.preventDefault();
      let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`}
      axios.get(`${BASE_URL}/api-v1/categories/?page=${page}`, {headers})
      .then(response => {
        this.setState({categories:response.data.results})
      })
      .catch(error => {
        if (error.response){
            alert(error.response.data.message)
            }
        else if(error.request){
            alert('Request not made')
            }
        }); 
    } 
  
  render() {
    const {categories, q, per_page, total} = this.state;
    return (
      <div>
        
        < Navbar />
        <div>
            <h2 className="heading">Categories</h2>
            <CreateCategory handleViewCategory={this.handleViewCategory} {...this.props}/>
        </div>
        <div>
        <form onSubmit={this.handleViewCategoryBySearch} class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" name="q" type="text" value={q} onChange={this.handleInputChange}/>
          <button type="submit" className="btn my-2 my-sm-0"><i class="fas fa-search"></i>Search</button>
      </form>
      <hr/>
            <div className="row category-card">
            {
              categories.map((category)=>(
              <Category {...category} key={category.category_id}
              handleDeleteCategory={()=>this.handleDeleteCategory(category.category_id)}
              cat_id = {category.category_id}
              handleEditCategory={this.handleEditCategory}/>

              ))
            }
            </div>
              <Pagination per_page={per_page} total={total} handlePageChange={this.handlePageChange}/>
        </div>
    </div>
        );
      }
    }

    const Category = props => (
      <div className="card single-card">
        <div className="card-body">
          <Link to={`/categories/${props.cat_id}/viewrecipes`}><h5 className="card-title">{props.category_name}</h5></Link>
          <button type="button" className="btn my-2 my-sm-0 btn-outline-success" data-toggle="modal" 
            data-target={`#editCategory${props.category_id}`}>
              <i class="far fa-edit"></i>
          </button>
          <div class="divider"/>
          <button type="button" className="btn btn-default btn-outline-danger"
            onClick={props.handleDeleteCategory}>
            <i class="fas fa-trash"></i>
          </button>  
        </div>
        <EditCategory category_name={props.category_name} category_id={props.category_id} />
      </div>
);

export default ViewCategory;
