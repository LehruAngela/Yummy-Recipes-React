import axios from 'axios';
import { REGISTER_USER } from './types';
import { BASE_URL } from '../constants/baseUrl';
import { notify } from 'react-notify-toast';

export const registerUser = (data, ownProps) => dispatch => {
  try {
  axios.post(`${BASE_URL}/api-v1/auth/register`, data)
    .then(response => {
      console.log('got here')
      notify.show(response.data.message, 'success', 4000);
      localStorage.setItem('accessToken', response.data.access_token); // access token not being returned in response 
      // this.setState({ profile: response.data.username })
      ownProps.history.push('/categories');
    })

    .then(response => dispatch({
      type: REGISTER_USER,
      payload: response.data.username
    }))

  }catch(error){
    console.log('errororororororo')
      if (error.response) {
        notify.show(error.response.data.message, 'warning')
      }
      else if (error.request) {
        alert('Request not made');
      }
    };
}

export const loginUser = (data) => dispatch => {
  axios.post(`${BASE_URL}/api-v1/auth/login`, data)
    .then(response => {
      notify.show(response.data.message, 'success', 4000);
      localStorage.setItem('accessToken', response.data.access_token);
      this.props.history.push('/categories');
    })

    .catch(error => {
      if (error.response) {
        notify.show(error.response.data.message, 'warning')
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}
