import axios from 'axios';
import { notify } from 'react-notify-toast';
import { BASE_URL } from '../constants/baseUrl';
import { history } from '../helpers/history';
import { GET_USERNAME } from './types';

export const registerUser = (data) => {
  axios.post(`${BASE_URL}/api-v1/auth/register`, data)
    .then(response => {
      notify.show(response.data.message, 'success', 4000);
      localStorage.setItem('accessToken', response.data.access_token); // access token not being returned in response 
      history.push('/categories');
    })
    .catch(error => {
      if (error.response) {
        notify.show(error.response.data.message, 'warning')
      }
      else if (error.request) {
        alert('Request not made');
      }
    })
}

export const loginUser = (data) => {
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

export const getUsername = () => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.get(`${BASE_URL}/api-v1/username`, { headers })
    .then(response => dispatch({
      type: GET_USERNAME,
      payload: response.data.username
    }))
    .catch(error => {
      if (error.response) {
        notify.show('Username not picked', 'success', 3000)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}
