import axios from 'axios';
import { REGISTER_USER } from './types';
import { BASE_URL } from '../constants/baseUrl';
import { notify } from 'react-notify-toast';
import { history } from '../helpers/history';

export const registerUser = (data) => dispatch => {
  axios.post(`${BASE_URL}/api-v1/auth/register`, data)
    .then(response => {
      notify.show(response.data.message, 'success', 4000);
      localStorage.setItem('accessToken', response.data.access_token); // access token not being returned in response 
      // this.setState({ profile: response.data.username })
      history.push('/categories');
    })

    // .then(response => dispatch({
    //   type: REGISTER_USER,
    //   payload: response.data.username
    // }))

  .catch(error =>{
      if (error.response) {
        notify.show(error.response.data.message, 'warning')
      }
      else if (error.request) {
        alert('Request not made');
      }
    })
}

export const loginUser = (data) => dispatch => {
  axios.post(`${BASE_URL}/api-v1/auth/login`, data)
    .then(response => {
      notify.show(response.data.message, 'success', 4000);
      localStorage.setItem('accessToken', response.data.access_token);
      history.push('/categories');
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
