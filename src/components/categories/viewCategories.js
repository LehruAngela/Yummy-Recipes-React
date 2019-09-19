import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Pagination from './pagination';
import Navbar from '../shared/navbar';
// import CreateCategory from './createCategory';
// import EditCategory from './editCategory';
import { viewCategory, searchCategory, deleteCategory, pageChange } from '../../actions/categoryActions';

class ViewCategory extends Component {
  state = {
    categories: [],
    q: "",
    page: "",
    per_page: 9,
    total: "",
  }

  componentDidMount() {
    this.props.viewCategory();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleViewCategoryBySearch = (event) => {
    event.preventDefault();
    const q = event.target.q.value
    this.props.searchCategory(q)
  }

  handlePageChange = (event, page) => {
    event.preventDefault();
    this.props.pageChange(page)
  }

  render() {
    const { categories, q, per_page, total } = this.state;
    return (
      <div>
        < Navbar />
        <div>
          <h2 className="heading">Categories</h2>
          {/* <CreateCategory handleViewCategory={this.handleViewCategory} {...this.props} /> */}
        </div>
        <div>
          <form onSubmit={this.handleViewCategoryBySearch} class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 search" placeholder="Search" aria-label="Search" name="q" type="text" value={q} onChange={this.handleInputChange} />
            <button type="submit" className="btn my-2 my-sm-0"><i class="fas fa-search"></i>Search</button>
          </form>
          <hr />
          <div className="row category-card">
            {
              categories.map((category) => (
                <Category {...category} key={category.category_id}
                  handleDeleteCategory={() => this.props.deleteCategory(category.category_id)}
                  cat_id={category.category_id}
                  handleEditCategory={this.handleEditCategory} />

              ))
            }
          </div>
          {/* <Pagination per_page={per_page} total={total} handlePageChange={this.handlePageChange} /> */}
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
      <div class="divider" />
      <button type="button" className="btn btn-default btn-outline-danger"
        onClick={props.handleDeleteCategory}>
        <i class="fas fa-trash"></i>
      </button>
    </div>
    {/* <EditCategory category_name={props.category_name} category_id={props.category_id} /> */}
  </div>
);

export default connect(null, { viewCategory, searchCategory, deleteCategory, pageChange })(ViewCategory);
