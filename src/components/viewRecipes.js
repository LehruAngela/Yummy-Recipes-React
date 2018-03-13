import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {notify} from 'react-notify-toast';
import {Navbar} from './navbar';
import {CreateRecipe} from './createRecipe'

export class ViewRecipe extends React.Component {
  state = {
    category_name: "",
    recipes: [],
    q: "",
    recipe_name: "",
    ingredients: '',
    directions: '',
  }

  handleViewRecipe =()=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    let cat_id = this.props.match.params.category_id 
    axios.get(`http://127.0.0.1:5000/api-v1/categories/${cat_id}/recipes/`, {headers})
         .then(response => {
           this.setState({recipes:response.data})
           console.log(response.data)
          })
          .catch(error => {
          if (error.response){
              alert(error.response.data.message)
              }
          else if(error.request){
              alert('Request not made')
              }
          });

    axios.get(`http://127.0.0.1:5000/api-v1/categories/${cat_id}`, {headers})
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
    axios.get(`http://127.0.0.1:5000/api-v1/categories/${cat_id}/recipes/?q=${q}`, {headers})
         .then(response => {
           this.setState({recipes:response.data})
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

  handleDeleteRecipe =(rec_id)=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    let cat_id = this.props.match.params.category_id 
    axios.delete(`http://127.0.0.1:5000/api-v1/categories/${cat_id}/recipes/${rec_id}`, {headers})
         .then(response => {
          notify.show('Recipe deleted successfully', 'success', 4000);
          this.handleViewRecipe();
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
    axios.put(`http://127.0.0.1:5000/api-v1/categories/${cat_id}/recipes/${rec_id}`, {headers})
          .then(response => {
          notify.show('Recipe edited successfully', 'success', 4000);
          this.handleViewRecipe();
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
    const {recipes, recipe_name, ingredients, directions} = this.state;
    const {q} = this.state;
    let cat_id = this.props.match.params.category_id 
    return (
      <div>
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
        <div className="">
        {
          recipes.map((recipe)=>(
          <Recipe {...recipe} key={recipe.recipe_id}
          handleDeleteRecipe={()=>this.handleDeleteRecipe(recipe.recipe_id)}/>
          ))
        }
      </div>
      </div>
    );
  }
}

const Recipe = props => (
  <div id="accordion">
  <div class="card">
    <div class="card-header" id={props.recipe_id}>
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target={`#recipeDetails${props.recipe_id}`} aria-expanded="true" aria-controls="collapseOne">
        {props.recipe_name}
        </button>
      </h5>
    </div>

    <div id={`recipeDetails${props.recipe_id}`} class="collapse show" aria-labelledby={props.recipe_id} data-parent="#accordion">
      <div class="card-body">
      <p>Ingredients: {props.ingredients}<br/></p>
      <p>Directions: {props.directions}< br/></p>
      <button type="button" className="btn btn-default">
         <Link to={`/categories/${props.category_id}/editrecipes/${props.recipe_id}`} className="link">
         <i class="far fa-edit"></i>Edit</Link>
      </button>
      <button type="button" className="btn btn-default"
         onClick={props.handleDeleteRecipe}>
        <i class="fas fa-trash"></i>Delete
      </button>  
      </div>
    </div>
  </div>
  </div>
);
