import React, { Component } from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';

export class EditCategory extends React.Component {
    state = {
        category_name: '',
    }
    
    componentWillMount(){
        let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
        let cat_id = this.props.match.params.category_id
        axios.get(`http://127.0.0.1:5000/api-v1/categories/${cat_id}`, { headers })
        .then(response => {
            const category = response.data;
            this.setState({category_name: category.category_name})
        })
        .catch(error => {
        if (error.response) {
            alert(error.response.data.message)
        }
        else if (error.request) {
            alert("Request not made")
        }
        });
    }

    handleInputChange =(event)=>{
    const {name, value} = event.target;
    this.setState({[name]:value})

    }

    handleEditCategory =(event)=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    let cat_id = this.props.match.params.category_id
    event.preventDefault();
    axios.put(`http://127.0.0.1:5000/api-v1/categories/${cat_id}`,this.state, {headers})
            .then(response => {notify.show('Category edited successfully', 'success', 4000);
            this.props.history.push('/categories');
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
                <form onSubmit={this.handleEditCategory}>
                <div>
                    <label>Category Name</label><br/>
                    <input name="category_name" type="text" value={category_name} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <button type="submit">Edit</button>
                </div>
            </form>
            </div>
            );
        }
    }