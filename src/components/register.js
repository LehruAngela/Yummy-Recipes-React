import React , { Component}from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';

export class Register extends React.Component{
    state = {
        email: '',
        password:'',
        confirm_password:'',
    }

    handleInputChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    
      }
    
    handleRegister =(event)=>{
    const {email, password, confirm_password} = this.state
    let data = {email, password, confirm_password}
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/api-v1/auth/register',data)
            .then(response =>{notify.show(response.data.message, 'success', 4000);
            this.props.history.push('/categories');
            })

    .catch(error => {
    if (error.response)
    {
        alert(error.response.data.message)
    }
    else if(error.request){
        alert('Request not made')
    }
    });
    }

    render() {
        const {email, password, confirm_password} = this.state
        return(
            <div class="margin">
                <h2>Register</h2>
                <form onSubmit={this.handleRegister}>
                    {/* <div>
                        <label htmlFor="username">Username</label><br/>
                        <input name="username" type="username" value={username} onChange={this.handleInputChange}/>
                    </div> */}
                    <div>
                        <label htmlFor="email">Email</label><br/>
                        <input name="email" type="email" value={email} onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br/>
                        <input name="password" type="password" value={password} onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="confirmpassword">Confirm Password</label><br/>
                        <input name="confirm_password" type="password" value={confirm_password} onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
                <footer>
                    <p class="copyright text-muted small">Copyright © Gela 2018.</p>
                </footer>
            </div>
        );
    }
}

export default Register;