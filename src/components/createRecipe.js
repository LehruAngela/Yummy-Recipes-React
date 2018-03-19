import React from 'react';
import axios from 'axios';
import { notify } from 'react-notify-toast';

export class CreateRecipe extends React.Component {
    state = {
        recipe_name: '',
        ingredients: '',
        directions: '',
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })

    }

    handleCreateRecipe = (event) => {
        let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
        let cat_id = this.props.match.params.category_id 
        event.preventDefault();
        axios.post(`${BASE_URL}/api-v1/categories/${cat_id}/recipes/`, this.state, { headers })
            .then(response => {
                document.getElementById('closeRecipeModal').click();
                notify.show('Recipe created successfully', 'success', 4000);
                this.props.handleViewRecipe();

            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                }
                else if (error.request) {
                    alert('Request not made')
                }
                });
            }
            
    render() {
        const {recipe_name, ingredients, directions} = this.state
        return (
            <div>
            <button type="button" className="btn my-2 my-sm-0 addbutton link" data-toggle="modal" data-target="#exampleModalCenter">
             <i class="fas fa-plus-circle"></i> Add Recipe
            </button>   
   
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLongTitle">Add Recipe</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeRecipeModal">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={this.handleCreateRecipe}>
                            <div>
                                <label>Recipe Name</label><br/>
                                <input name="recipe_name" type="text" value={recipe_name} onChange={this.handleInputChange} />
                            </div>
                            <div>
                                <label for="ingredients">Ingredients</label><br/>
                                <textarea name="ingredients" type="text" value={ingredients} onChange={this.handleInputChange} rows="3" cols="50"/>
                            </div>
                            <div>
                                <label for="directions">Directions</label><br/>
                                <textarea name="directions" type="text" value={directions} onChange={this.handleInputChange} rows="3" cols="50"/>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Create Recipe</button>
                            </div>
                        </form>
                    </div>      
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
export default CreateRecipe;