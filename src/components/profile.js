import React from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';

class Profile extends React.Component{
    state = {
        username : ""
    }

    handleProfile =()=> {
        let headers = {Authorization:`Bearer ${localStorage.getItem('accessToken')}`};
        axios.get('http://127.0.0.1:5000/api-v1/username', {headers})
                .then(response => {
                this.setState({username:response.data.username})
                })
                .catch(error => {
                if (error.response){
                    notify.show('Username not picked', 'success', 3000)
                    }
                else if(error.request){
                    alert('Request not made')
                    }
                });
        }
        componentDidMount() {
        this.handleProfile();
        }
    
    render() {
        const {username} = this.state;
        return(
            <div className="purple">
                <i class="fas fa-user-circle"></i>{username}
            </div>
        );
    }
}
export default Profile;
