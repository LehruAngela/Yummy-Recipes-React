import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../shared/navbar';
import Pagination from '../shared/pagination';
import CreateRecipe from './createRecipe';
import EditRecipe from './editRecipe';
import { viewRecipe, searchRecipe, deleteRecipe, editRecipe, pageChange } from '../../actions/recipeActions';

class ViewRecipe extends React.Component {
  state = {
    category_name: "",
    q: "",
    recipe_name: "",
    ingredients: '',
    directions: '',
    per_page: 6,
  }

  handleViewRecipe = () => {
    let catId = this.props.match.params.category_id;
    this.props.viewRecipe(catId);
  }
  componentDidMount() {
    this.handleViewRecipe();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleViewRecipeBySearch = (event) => {
    event.preventDefault();
    let catId = this.props.match.params.category_id
    const q = event.target.q.value
    this.props.searchRecipe(catId, q);
  }

  handleDeleteRecipe = (recId) => {
    let catId = this.props.match.params.category_id
    this.props.deleteRecipe(catId, recId);
  }

  handlePageChange = (event, page) => {
    event.preventDefault();
    let catId = this.props.match.params.category_id
    this.props.pageChange(catId, page);
  }

  render() {
    const { per_page } = this.state;
    const { recipes, total } = this.props;
    const { q } = this.state;
    return (
      <div>
        <div className="header">
          <Navbar />
          <div>
            <h2 className="heading">{this.state.category_name}'s Recipes</h2>
            <CreateRecipe handleViewRecipe={this.handleViewRecipe} {...this.props} />
          </div>
          <form onSubmit={this.handleViewRecipeBySearch} className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 search" placeholder="Search" aria-label="Search" name="q" type="text" value={q} onChange={this.handleInputChange} />
            <button type="submit" className="btn my-2 my-sm-0" ><i className="fas fa-search"></i>Search</button>
          </form>
          <hr />
        </div>
        <div className="">
          {
            recipes.map((recipe) => (
              <Recipe {...recipe} key={recipe.recipe_id}
                handleDeleteRecipe={() => this.handleDeleteRecipe(recipe.recipe_id)} />
            ))
          }
        </div>
        <Pagination per_page={per_page} total={total} handlePageChange={this.handlePageChange} />
      </div>
    );
  }
}

const Recipe = props => (
  <div id="accordion">
    <div className="card recipe-card">
      <div className="card-header" id={props.recipe_id}>
        <h5 className="mb-0">
          <button className="btn btn-link brown" data-toggle="collapse" data-target={`#recipeDetails${props.recipe_id}`} aria-expanded="true" aria-controls="collapseOne">
            {props.recipe_name}
          </button>
        </h5>
      </div>
      <div id={`recipeDetails${props.recipe_id}`} className="collapse show" aria-labelledby={props.recipe_id} data-parent="#accordion">
        <div className="card-body">
          <div className="brown">Ingredients:<br /></div> {props.ingredients}<br />
          <div className="brown">Directions: <br /></div>{props.directions}< br />
          <button type="button" className="btn my-2 my-sm-0 btn-outline-success recipe-btn" data-toggle="modal" data-target={`#editRecipe${props.recipe_id}`}>
            <i className="far fa-edit"></i>
          </button>
          <div className="divider" />
          <button type="button" className="btn btn-default btn-outline-danger recipe-btn"
            onClick={props.handleDeleteRecipe}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
        <EditRecipe category_id={props.category_id}
          recipe_id={props.recipe_id}
          recipe_name={props.recipe_name}
          ingredients={props.ingredients}
          directions={props.directions} />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  recipes: state.recipe.recipes,
  total: state.recipe.total
})

export default connect(mapStateToProps, { viewRecipe, searchRecipe, deleteRecipe, editRecipe, pageChange })(ViewRecipe);
