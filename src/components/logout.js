import React from 'react';
import {notify} from 'react-notify-toast';
import {withRouter} from 'react-router'

/**
 * Component for logging out users
 */

class Logout extends React.Component{
  // Function that logs out users
  handleLogout =(event)=>{
         localStorage.clear();
         this.props.history.push('/login');
         notify.show('You are logged out', 'success', 4000);
        }

  render() {
      return(
        <div>
            <button className="btn btn-light" type="submit" onClick={this.handleLogout}>Logout</button>
        </div>
      );
    }
}
export default withRouter(Logout);
