import React from 'react';
import { connect } from 'react-redux';
import { editRecipe } from '../../actions/recipeActions';

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

  componentWillMount() {
    this.setState({
      recipe_name: this.props.recipe_name,
      ingredients: this.props.ingredients,
      directions: this.props.directions
    })
  }

  handleEditRecipe = (event) => {
    event.preventDefault();
    let catId = this.props.category_id;
    let recId = this.props.recipe_id;
    this.props.editRecipe(catId, recId, this.state);
  }

  render() {
    const { recipe_name, ingredients, directions } = this.state
    return (
      <div className="modal fade" id={`editRecipe${this.props.recipe_id}`} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLongTitle">Edit Recipe</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeRecipeModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleEditRecipe}>
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
                  <button type="submit" className="btn btn-primary">Edit Recipe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { editRecipe })(EditRecipe);
