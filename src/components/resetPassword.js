import React from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';
import {BASE_URL} from '../baseUrl';

export class ResetPassword extends React.Component{
    state = {
        email: '',
        new_password:'',
        confirm_new_password:'',
    }

    handleInputChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    
      }
    
    handleResetPassword =(event)=>{
    let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
    const {email, new_password, confirm_new_password} = this.state
    let data = {email, new_password, confirm_new_password}
    event.preventDefault();
    axios.post(`${BASE_URL}/api-v1/auth/reset_password`, data, {headers} )
            .then(response =>{notify.show(response.data.message, 'success', 4000);
            this.props.history.push('/login');
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
        const {email, new_password, confirm_new_password} = this.state
        return(
            <div className="form-margin">
                <h2>Reset Password</h2><br/>
                <form onSubmit={this.handleResetPassword}>
                    <div className="form-group">
                        <h4><label htmlFor="email">Email:</label><br/></h4>
                        <input name="email" type="email" value={email} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <h4><label htmlFor="password">New Password:</label><br/></h4>
                        <input name="new_password" type="password" value={new_password} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <h4><label htmlFor="confirmpassword">Confirm New Password:</label><br/></h4>
                        <input name="confirm_new_password" type="password" value={confirm_new_password} onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-outline-warning">Reset Password</button>
                    </div><br/><br/>
                </form>
                <footer>
                    <p class="copyright text-muted small footer">Copyright © Gela 2018.</p>
                </footer>
            </div>
        );
    }
}

export default ResetPassword;