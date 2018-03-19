import React from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';
import {BASE_URL} from '../baseUrl';

export class CreateCategory extends React.Component {
    state = {
        category_name: '',
    }
    
    handleInputChange =(event)=>{
    const {name, value} = event.target;
    this.setState({[name]:value})

    }
    

    handleCreateCategory =(event)=>{
        event.preventDefault();
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    
 
    axios.post(`${BASE_URL}/api-v1/categories/`,this.state, {headers})
            .then(response => {
            notify.show('Category created successfully', 'success', 4000);
               window.location.reload();
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
            <button type="button" className="btn my-2 my-sm-0 addbutton link" data-toggle="modal" data-target="#createCategory">
             <i class="fas fa-plus-circle"></i> Add Category
            </button>   
   
            <div class="modal fade" id="createCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLongTitle">Add Category</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeCategoryModal">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={this.handleCreateCategory}>
                        <div className="form-group">
                            <h6><label>Category Name</label><br/></h6>
                            <input name="category_name" type="text" value={category_name} onChange={this.handleInputChange}/>
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

export default CreateCategory;