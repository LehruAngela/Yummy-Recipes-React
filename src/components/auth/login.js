import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SendEmail from './sendEmail';
import { loginUser } from '../../actions/authActions';

/**
 * Component for logging in users
 */

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  // Function to handle the logging in of users
  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state
    let data = { email, password }

    // call action
    this.props.loginUser(data)
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="form-margin">
        <h1>Login to your account</h1>< br />
        <form onSubmit={this.handleLogin}>
          <div className="form-group">
            <h4><label htmlFor="email">Email:</label></h4>
            <input name="email" type="email" value={email} onChange={this.handleInputChange} />
          </div><br />
          <div className="form-group">
            <h4><label htmlFor="password">Password:</label></h4>
            <input name="password" type="password" value={password} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-outline-warning" type="submit">Login</button>
          </div>
          <div>
            <button className="link-button" href="#" data-toggle="modal" data-target="#exampleModal">
            Forgotten Password?
          </button>
            <SendEmail/>
          </div><br /><br />
        </form>
        <div>
          <h4>Don't have an account?</h4>
          <Link to="/"><button className="btn btn-outline-warning" type="submit">Register</button></Link>
        </div><br /><br />
        <footer>
          <p className="copyright text-muted small footer">© Gela 2019</p>
        </footer>
      </div>
    );
  }
}

export default connect(null, { loginUser })(Login);
