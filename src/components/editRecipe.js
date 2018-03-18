import React from 'react';
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

    handleEditRecipe = (event) => {
        let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
        let cat_id = this.props.match.params.category_id
        let rec_id = this.props.match.params.recipe_id
        event.preventDefault();
        axios.put(`http://127.0.0.1:5000/api-v1/categories/${cat_id}/recipes/${rec_id}`, { headers })
            .then(response => {
                document.getElementById('closeCategoryModal').click();
                notify.show('Recipe edited successfully', 'success', 4000);
                this.handleViewRecipe();
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
        const { recipe_name, ingredients, directions } = this.state
        return (
            <div class="modal fade" id={`editRecipe${this.props.recipe_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLongTitle">Edit Recipe</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeRecipeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={this.handleEditRecipe}>
                                <div>
                                    <label>Recipe Name</label><br />
                                    <input name="recipe_name" type="text" value={recipe_name} onChange={this.handleInputChange} />
                                </div>
                                <div>
                                    <label for="ingredients">Ingredients</label><br />
                                    <textarea name="ingredients" type="text" value={ingredients} onChange={this.handleInputChange} rows="3" cols="50" />
                                </div>
                                <div>
                                    <label for="directions">Directions</label><br />
                                    <textarea name="directions" type="text" value={directions} onChange={this.handleInputChange} rows="3" cols="50" />
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Edit Recipe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditRecipe;