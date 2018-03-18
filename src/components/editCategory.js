import React from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';

export class EditCategory extends React.Component {
    state = {
        category_name: '',
    }
    
    // componentWillMount(){
    //     let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
    //     let cat_id = this.props.match.params.category_id
    //     axios.get(`http://127.0.0.1:5000/api-v1/categories/${cat_id}`, { headers })
    //     .then(response => {
    //         const category = response.data;
    //         this.setState({category_name: category.category_name})
    //     })
    //     .catch(error => {
    //     if (error.response) {
    //         alert(error.response.data.message)
    //     }
    //     else if (error.request) {
    //         alert("Request not made")
    //     }
    //     });
    // }
    // componentWillMount(){
    //     this.setState({category_name:this.props.category_name})
    // }

    handleInputChange =(event)=>{
    const {name, value} = event.target;
    this.setState({[name]:value})

    }

    handleEditCategory =(event)=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    let cat_id = this.props.match.params.category_id
    event.preventDefault();
    axios.put(`http://127.0.0.1:5000/api-v1/categories/${cat_id}`,this.state, {headers})
            .then(response => {
                document.getElementById('closeCategoryModal').click();
                notify.show('Category edited successfully', 'success', 4000);
                this.props.handleViewCategory();
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
            {/* <button type="button" className="btn my-2 my-sm-0 addbutton link" data-toggle="modal" data-target={`#edit_category${this.props.category_id}`}>
            <i class="far fa-edit"></i>Edit
            </button>    */}
   
            <div class="modal fade" id={`editCategory${this.props.category_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLongTitle">Edit Category</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeCategoryModal">
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