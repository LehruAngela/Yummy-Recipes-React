import React from 'react';
import { Link } from 'react-router-dom';

export class LandingPage extends React.Component {
  
  handleSignup = (event) => {
    event.preventDefault();
    this.props.history.push('/signup')
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.history.push('/login')
  }
  
  render() {
    return(
      <div>
        <p>Landing page!</p>
        <button onClick={this.handleSignup}class="btn btn-primary">Signup</button>
        <button onClick={this.handleLogin}class="btn btn-primary">Login</button>
        <Link to={'/signup'}>Register</Link>
      </div>
    );
  }
}

// export default LandingPage;
