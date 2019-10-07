import React from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../../actions/recipeActions';

class CreateRecipe extends React.Component {
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
    event.preventDefault();
    let catId = this.props.match.params.category_id;
    this.props.createRecipe(catId, this.state);
    document.getElementById('closeRecipeModal').click();
    this.props.handleViewRecipe();
  }

  render() {
    const { recipe_name, ingredients, directions } = this.state
    return (
      <div>
        <button type="button" className="btn my-2 my-sm-0 addbutton link" data-toggle="modal" data-target="#exampleModalCenter">
          <i className="fas fa-plus-circle"></i> Add Recipe
            </button>

        <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLongTitle">Add Recipe</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeRecipeModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleCreateRecipe}>
                  <div>
                    <label>Recipe Name</label><br />
                    <input name="recipe_name" type="text" value={recipe_name} onChange={this.handleInputChange} />
                  </div>
                  <div>
                    <label htmlFor="ingredients">Ingredients</label><br />
                    <textarea name="ingredients" type="text" value={ingredients} onChange={this.handleInputChange} rows="3" cols="50" />
                  </div>
                  <div>
                    <label htmlFor="directions">Directions</label><br />
                    <textarea name="directions" type="text" value={directions} onChange={this.handleInputChange} rows="3" cols="50" />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Create Recipe</button>
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

export default connect(null, { createRecipe })(CreateRecipe);
