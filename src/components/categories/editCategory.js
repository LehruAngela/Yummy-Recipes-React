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
        <div className="modal fade" id={`editCategory${this.props.category_id}`} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLongTitle">Edit Category</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeCategoryEditModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
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
