import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsername } from '../../actions/authActions';
// import Logout from "./logout";

class Navbar extends Component {
  componentDidMount() {
    this.props.getUsername();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="black">
          <a className="navbar-brand">Yummy Recipes</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link btn btn-light" href="/categories">Categories<span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <div className="purple">
            <i className="fas fa-user-circle"></i>{this.props.username}
          </div>
          {/* <Logout /> */}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  username: state.auth.username
});


export default connect(mapStateToProps, { getUsername })(Navbar);
