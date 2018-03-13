import React , { Component}from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';
import {SendEmail} from './sendEmail';

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
    console.log(data)
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/api-v1/auth/login', data)
         .then(response =>{notify.show(response.data.message, 'success', 4000);
         localStorage.setItem('accessToken', response.data.access_token);
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
    const {email, password} = this.state
      return(
        <div class="margin">
          <h2>Login to your account</h2>
          <form onSubmit={this.handleLogin}>
            <div>
              <label for="email">Email</label><br/>
              <input name="email" type="email" value={email} onChange={this.handleInputChange} />
            </div>
            <div>
              <label for="password">Password</label><br/>
              <input name="password" type="password" value={password} onChange={this.handleInputChange} />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
          <h4>Dont have an account?</h4>
          <div>
          <button type="submit">Register</button>
          </div>
          <div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Forgot Password?  
        </button>
            < SendEmail/>
          </div>
        <footer>
          <p className="copyright text-muted small">Copyright © Gela 2018.</p>
        </footer>
      </div>
      );
    }
}

// export default Login;