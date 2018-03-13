import React, { Component } from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';

export class CreateCategory extends React.Component {
    state = {
        category_name: '',
    }
    
    handleInputChange =(event)=>{
    const {name, value} = event.target;
    this.setState({[name]:value})

    }

    handleCreateCategory =(event)=>{
    let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/api-v1/categories/',this.state, {headers})
            .then(response => {notify.show('Category created successfully', 'success', 4000);
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
                <form onSubmit={this.handleCreateCategory}>
                <div>
                    <label>Category Name</label><br/>
                    <input name="category_name" type="text" value={category_name} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
            </div>
            );
        }
    }