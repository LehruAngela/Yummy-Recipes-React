import React, { Component } from 'react';
import axios from 'axios';
import { notify } from 'react-notify-toast';

export class EditRecipe extends React.Component {
    state = {
        recipe_name: '',
        ingredients: '',
        directions: '',
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })

    }

    handleEditRecipe =(event)=>{
        let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
        let cat_id = this.props.match.params.category_id
        let rec_id = this.props.match.params.recipe_id 
        event.preventDefault();
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
        const {recipe_name, ingredients, directions} = this.state
        return (
            <div>
                <form onSubmit={this.handleCreateRecipe}>
                    <div>
                        <label>Recipe Name</label><br/>
                        <input name="recipe_name" type="text" value={recipe_name} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label for="ingredients">Ingredients</label><br/>
                        <input name="ingredients" type="text" value={ingredients} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label for="directions">Directions</label><br/>
                        <input name="directions" type="text" value={directions} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <button type="submit">Edit Recipe</button>
                    </div>
                </form>
            </div>
        );
    }
}
