import React , { Component}from 'react';
import {notify} from 'react-notify-toast';
import {withRouter} from 'react-router'
import {Redirect} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';

class Logout extends React.Component{

  handleLogout =(event)=>{
         localStorage.clear();
         
         console.log("I am cleared")
         console.log(localStorage)
         this.props.history.push('/login');
         notify.show('You are logged out', 'success', 4000);
        }

  render() {
      return(
        <div>
            <button type="submit" onClick={this.handleLogout}>Logout</button>
        </div>
      );
    }
}
export default withRouter(Logout);
