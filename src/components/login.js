import React from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';
import {SendEmail} from './sendEmail';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../baseUrl';

export class Login extends React.Component{
  state = {
    email: '',
    password: '',
  }

  handleInputChange =(event)=>{
    const {name, value} = event.target;
    this.setState({[name]:value})

  }

  handleLogin =(event)=>{
    const {email, password} = this.state
    let data = {email, password}
    event.preventDefault();
    axios.post(`${BASE_URL}/api-v1/auth/login`, data)
         .then(response =>{notify.show(response.data.message, 'success', 4000);
         localStorage.setItem('accessToken', response.data.access_token);
         this.props.history.push('/categories');
         })

  .catch(error => {
    if (error.response)
    {
      notify.show(error.response.data.message, 'warning')
    }
    else if(error.request){
      alert('Request not made')
    }
    });
  }

  render() {
    const {email, password} = this.state
      return(
        <div className="form-margin">
          <h1>Login to your account</h1>< br/>
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <h4><label for="email">Email:</label></h4>
              <input name="email" type="email" value={email} onChange={this.handleInputChange}/>
            </div><br/>
            <div className="form-group">
              <h4><label for="password">Password:</label></h4>
              <input name="password" type="password" value={password} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group"> 
              <button className="btn btn-outline-warning" type="submit">Login</button>
            </div>
            <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
          Forgotten Password?  
          </a>
            < SendEmail/>
          </div><br/><br/>
          </form>
          <div>
          <h4>Don't have an account?</h4>
          <Link to="/"><button className="btn btn-outline-warning" type="submit">Register</button></Link>
          </div><br/><br/>
          <footer>
            <p class="copyright text-muted small footer">Copyright © Gela 2018.</p>
          </footer>
      </div>
      );
    }
}

export default Login;