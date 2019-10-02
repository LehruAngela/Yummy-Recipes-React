import React from 'react';
import { connect } from 'react-redux';
import { editCategory } from '../../actions/categoryActions';

export class EditCategory extends React.Component {
  state = {
    category_name: '',
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  componentWillMount() {
    this.setState({
      category_name: this.props.category_name,
    })
  }

  handleEditCategory = (event) => {
    event.preventDefault();
    this.props.editCategory(this.props.category_id, this.state)
  }

  render() {
    const { category_name } = this.state
    return (
      <div>
        <div class="modal fade" id={`editCategory${this.props.category_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLongTitle">Edit Category</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeCategoryEditModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onSubmit={this.handleEditCategory}>
                  <div className="form-group">
                    <h6><label>Category Name</label><br /></h6>
                    <input name="category_name" type="text" value={category_name} onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <button type="submit">Edit</button>
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

export default connect(null, { editCategory })(EditCategory);
