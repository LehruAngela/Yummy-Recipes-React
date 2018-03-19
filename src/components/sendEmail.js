import React from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';

export class SendEmail extends React.Component{
    state = {
        email: '',
    }

    handleInputChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    
      }
    
    handleSendEmail =(event)=>{
    const {email} = this.state
    let data = {email}
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/api-v1/auth/send_email',data)
            .then(response =>{
                document.getElementById('closeModal').click();
                notify.show(response.data.message, 'success', 4000);
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
        const {email} = this.state
        return(
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">Reset Password</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeModal" >
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form onSubmit={this.handleSendEmail}>
                            <div className="form-group">
                                <h6><label htmlFor="email">Email</label><br/></h6>
                                <input name="email" type="email" value={email} onChange={this.handleInputChange}/>
                            </div>
                            <div class="modal-footer form-group">
                            <button type="submit" class="btn ">Send Email</button>
                        </div>
                        </form>
                        </div>
                        
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default SendEmail;