import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {notify} from 'react-notify-toast';
import {Navbar} from './navbar';
import {CreateRecipe} from './createRecipe';
import Pagination from './pagination';
import EditRecipe from './editRecipe';
import {BASE_URL} from '../baseUrl';

export class ViewRecipe extends React.Component {
  state = {
    category_name: "",
    recipes: [],
    q: "",
    recipe_name: "",
    ingredients: '',
    directions: '',
    page:"",
    per_page:6,
    total:"",
  }

  handleViewRecipe =()=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    let cat_id = this.props.match.params.category_id 
    axios.get(`${BASE_URL}/api-v1/categories/${cat_id}/recipes/`, {headers})
         .then(response => {
           this.setState({recipes:response.data.results, page:response.data.page, total:response.data.total})
           console.log(response.data)
          })
          .catch(error => {
          if (error.response){
              notify.show('You have no recipes', 'success', 3000)
              }
          else if(error.request){
              alert('Request not made')
              }
          });

    axios.get(`${BASE_URL}/api-v1/categories/${cat_id}`, {headers})
    .then(response => {
    this.setState({category_name:response.data.category_name})
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
  componentDidMount() {
    this.handleViewRecipe();
  }

  handleInputChange =(event)=>{
    const {name, value} = event.target;
    this.setState({[name]:value})
    }

  handleViewRecipeBySearch =(event)=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    event.preventDefault();
    let cat_id = this.props.match.params.category_id 
    const q = event.target.q.value
    axios.get(`${BASE_URL}/api-v1/categories/${cat_id}/recipes/?q=${q}`, {headers})
         .then(response => {
           this.setState({recipes:response.data.results})
          })
          .catch(error => {
          if (error.response){
            notify.show(error.response.data.message)
              }
          else if(error.request){
              alert('Request not made')
              }
          }); 
        }

  handleDeleteRecipe =(rec_id)=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    let cat_id = this.props.match.params.category_id 
    axios.delete(`${BASE_URL}/api-v1/categories/${cat_id}/recipes/${rec_id}`, {headers})
         .then(response => {
          if (this.state.recipes.length === 1) {
            this.setState({ recipes: [] });
          }
          else {
            this.handleViewRecipe();
          }

          notify.show('Recipe deleted successfully', 'success', 1000);
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
  
  handleEditRecipe =(rec_id)=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    let cat_id = this.props.match.params.category_id 
    axios.put(`${BASE_URL}/api-v1/categories/${cat_id}/recipes/${rec_id}`, {headers})
          .then(response => {
          notify.show('Recipe edited successfully', 'success', 4000);
          this.handleViewRecipe();
          })
          .catch(error => {
          if (error.response){
            notify.show(error.response.data.message)
              }
          else if(error.request){
              alert('Request not made')
              }
          });
    }
  
    handlePageChange = (event, per_page,page) => {
      event.preventDefault();
      let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`}
      let cat_id = this.props.match.params.category_id 
      axios.get(`${BASE_URL}/api-v1/categories/${cat_id}/recipes/?page=${page}`, {headers})
      .then(response => {
        this.setState({recipes:response.data.results})
      })
      .catch(error => {
        if (error.response){
          notify.show(error.response.data.message)
            }
        else if(error.request){
            alert('Request not made')
            }
        }); 
    } 

  render() {
    const {recipes, per_page, total} = this.state;
    const {q} = this.state;
    return (
      <div>
        <div className="header">
        <Navbar/>
        <div>
        <h2 className="heading">{this.state.category_name}'s Recipes</h2>
        <CreateRecipe handleViewRecipe={this.handleViewRecipe} {...this.props}/>
        </div>
        <form onSubmit={this.handleViewRecipeBySearch} class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" name="q" type="text" value={q} onChange={this.handleInputChange}/>
          <button type="submit" className="btn my-2 my-sm-0" ><i class="fas fa-search"></i>Search</button>
      </form>
      <hr/>
      </div>
        <div className="">
        {
          recipes.map((recipe)=>(
          <Recipe {...recipe} key={recipe.recipe_id}
          handleDeleteRecipe={()=>this.handleDeleteRecipe(recipe.recipe_id)}/>
          ))
        }
      </div>
      <Pagination per_page={per_page} total={total} handlePageChange={this.handlePageChange}/>
      </div>
    );
  }
}

const Recipe = props => (
  <div id="accordion">
  <div class="card recipe-card">
    <div class="card-header" id={props.recipe_id}>
      <h5 class="mb-0">
        <button className="btn btn-link brown" data-toggle="collapse" data-target={`#recipeDetails${props.recipe_id}`} aria-expanded="true" aria-controls="collapseOne">
        {props.recipe_name}
        </button>
      </h5>
    </div>
    <div id={`recipeDetails${props.recipe_id}`} class="collapse show" aria-labelledby={props.recipe_id} data-parent="#accordion">
      <div className="card-body">
        <p><div className="brown">Ingredients:<br/></div> {props.ingredients}<br/></p>
        <p><div className="brown">Directions: <br/></div>{props.directions}< br/></p>
        <button type="button" className="btn my-2 my-sm-0 btn-outline-success recipe-btn" data-toggle="modal" data-target={`#editRecipe${props.recipe_id}`}>
          <i class="far fa-edit"></i>
        </button>
        <div class="divider"/>
        <button type="button" className="btn btn-default btn-outline-danger recipe-btn"
          onClick={props.handleDeleteRecipe}>
          <i class="fas fa-trash"></i>
        </button>  
      </div>
      <EditRecipe category_id={props.category_id} 
                  recipe_id={props.recipe_id} 
                  recipe_name={props.recipe_name} 
                  ingredients={props.ingredients} 
                  directions={props.directions}/>
    </div>
  </div>
  </div>
);

export default ViewRecipe;
