import React from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';

export class EditCategory extends React.Component {
    state = {
        category_name: '',
    }
     
    handleInputChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
        }
    
    componentWillMount(){
        this.setState({category_name:this.props.category_name,               
        })
    }

    handleEditCategory =(event)=>{
        event.preventDefault();
        let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
        let cat_id = this.props.category_id 
        axios.put(`http://127.0.0.1:5000/api-v1/categories/${cat_id}`, this.state, {headers})
              .then(response => {
              window.location.reload();
              notify.show('Category edited successfully', 'success', 4000);
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
        const {category_name} = this.state
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
                            <h6><label>Category Name</label><br/></h6>
                            <input name="category_name" type="text" value={category_name} onChange={this.handleInputChange}/>
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
    
export default EditCategory;