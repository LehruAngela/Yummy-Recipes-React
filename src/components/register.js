import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions/authActions';

class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirm_password: '',
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }
  handleRegister = (event) => {
    event.preventDefault();
    const { email, username, password, confirm_password } = this.state
    let data = { email, username, password, confirm_password }

    // call action
    this.props.registerUser(data)
  }
  render() {
    const { email, username, password, confirm_password } = this.state
    return (
      <div className="form-margin">
        <h1>Yummy Recipes App</h1><br />
        <form onSubmit={this.handleRegister}>
          <div className="form-group">
            <h4><label htmlFor="email">Email:</label></h4>
            <input name="email" type="email" value={email} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <h4><label htmlFor="text">Username:</label><br /></h4>
            <input name="username" type="text" value={username} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <h4><label htmlFor="password">Password:</label><br /></h4>
            <input name="password" type="password" value={password} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <h4><label htmlFor="confirmpassword">Confirm Password:</label><br /></h4>
            <input name="confirm_password" type="password" value={confirm_password} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-outline-warning" type="submit">Register</button>
          </div><br />
        </form>
        <h4>Already have an account?</h4>
        <div>
          <Link to="/login"><button className="btn btn-outline-warning" type="submit">Login</button></Link>
        </div><br /><br />
        <footer>
          <p className="copyright text-muted small footer">© Gela 2019</p>
        </footer>
      </div>
    )
  }
}

export default connect(null, { registerUser })(Register);
