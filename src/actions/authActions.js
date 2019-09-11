import axios from 'axios';
import { REGISTER_USER } from './types';
import { BASE_URL } from '../constants/baseUrl';
import { notify } from 'react-notify-toast';

export const registerUser = (data) => dispatch => {
  axios.post(`${BASE_URL}/api-v1/auth/register`, data)
    .then(response => {
      notify.show(response.data.message, 'success', 4000);
      localStorage.setItem('accessToken', response.data.access_token); // access token not being returned in response 
      this.props.history.push('/categories');
      // this.setState({ profile: response.data.username })
    })

    .then(response => dispatch({
      type: REGISTER_USER,
      payload: response.data.username
    }))
    
    .catch(error => {
      if (error.response) {
        notify.show(error.response.data.message, 'warning')
      }
      else if (error.request) {
        alert('Request not made');
      }
    });
}
