import React from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../baseUrl';

/**
 * Component for registering the users of the application
 */

export class Register extends React.Component{
    state = {
        email: '',
        username: '',
        password:'',
        confirm_password:'',
        profile:''
    }

    handleInputChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
      }
    
    handleRegister =(event)=>{
    const {email, username, password, confirm_password} = this.state
    let data = {email, username, password, confirm_password}
    event.preventDefault();
    axios.post(`${BASE_URL}/api-v1/auth/register`, data)
            .then(response =>{notify.show(response.data.message, 'success', 4000);
            localStorage.setItem('accessToken', response.data.access_token);
            this.props.history.push('/categories');
            this.setState({profile:response.data.username})
            })

    .catch(error => {
    if (error.response)
    {
        notify.show(error.response.data.message, 'warning')
    }
    else if(error.request){
        alert('Request not made');
    }
    });
    }

    render() {
        const {email, username, password, confirm_password} = this.state
        return(
            <div className="form-margin">
                <h1>Yummy Recipes App</h1><br/>
                <form onSubmit={this.handleRegister}>
                    <div className="form-group">
                        <h4><label htmlFor="email">Email:</label></h4>
                        <input name="email" type="email" value={email} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <h4><label htmlFor="text">Username:</label><br/></h4>
                        <input name="username" type="text" value={username} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <h4><label htmlFor="password">Password:</label><br/></h4>
                        <input name="password" type="password" value={password} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <h4><label htmlFor="confirmpassword">Confirm Password:</label><br/></h4>
                        <input name="confirm_password" type="password" value={confirm_password} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-warning" type="submit">Register</button>
                    </div><br/>
                </form>
                <h4>Already have an account?</h4>
                    <div>
                    <Link to="/login"><button className="btn btn-outline-warning" type="submit">Login</button></Link>
                    </div><br/><br/>
                <footer>
                    <p className="copyright text-muted small footer">Copyright © Gela 2018.</p>
                </footer>
            </div>
        );
    }
}

export default Register;