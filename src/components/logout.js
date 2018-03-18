import React from 'react';
import {notify} from 'react-notify-toast';
import {withRouter} from 'react-router'

class Logout extends React.Component{

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
