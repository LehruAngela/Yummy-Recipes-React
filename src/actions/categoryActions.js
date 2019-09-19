import axios from 'axios';
import { notify } from 'react-notify-toast';
import { BASE_URL } from '../constants/baseUrl';
import { VIEW_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY } from './types';

export const viewCategory = () => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.get(`${BASE_URL}/api-v1/categories/`, { headers })
    .then(response => dispatch({
      type: VIEW_CATEGORIES,
      payload: response.data
    }))
    .catch(error => {
      if (error.response) {
        notify.show('You have no categories', 'success', 3000)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}

export const searchCategory = (q) => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
  axios.get(`${BASE_URL}/api-v1/categories/?q=${q}`, { headers })
    .then(response => {
      this.setState({ categories: response.data.results })
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}

export const createCategory = (category) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.post(`${BASE_URL}/api-v1/categories/`, category, { headers })
    .then(response => dispatch({
      type: CREATE_CATEGORY,
      payload: response.data,
    }))
    .then(response => {
      notify.show('Category created successfully', 'success', 4000);
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}

export const deleteCategory = (catId) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.delete(`${BASE_URL}/api-v1/categories/${catId}`, { headers })
    .then(response => dispatch({
      type: DELETE_CATEGORY,
      payload: response.data.message.split(" ")
    }))
    .then(response => {
      notify.show('Category deleted successfully', 'success', 4000); 
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}

export const pageChange = (page) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
  axios.get(`${BASE_URL}/api-v1/categories/?page=${page}`, { headers })
    .then(response => {
      this.setState({ categories: response.data.results })
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}
