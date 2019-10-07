import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createCategory } from '../../actions/categoryActions';

export class CreateCategory extends Component {
  state = {
    category_name: '',
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleCreateCategory = (event) => {
    event.preventDefault();
    this.props.createCategory(this.state);
    document.getElementById('closeCategoryModal').click();
  }

  render() {
    const { category_name } = this.state
    return (
      <div>
        <button type="button" className="btn my-2 my-sm-0 addbutton link" data-toggle="modal" data-target="#createCategory">
          <i className="fas fa-plus-circle"></i> Add Category
            </button>

        <div className="modal fade" id="createCategory" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLongTitle">Add Category</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeCategoryModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleCreateCategory}>
                  <div className="form-group">
                    <h6><label>Category Name</label><br /></h6>
                    <input name="category_name" type="text" value={category_name} onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <button type="submit">Create</button>
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

CreateCategory.propTypes = {
  createCategory: PropTypes.func.isRequired
}

export default connect(null, { createCategory })(CreateCategory);
