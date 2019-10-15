import axios from 'axios';
import { notify } from 'react-notify-toast';
import { BASE_URL } from '../constants/baseUrl';
import { VIEW_RECIPES } from './types';

export const viewRecipe = (catId) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.get(`${BASE_URL}/api-v1/categories/${catId}/recipes/`, { headers })
    .then(response => dispatch({
      type: VIEW_RECIPES,
      payload: response.data
    }))
    .catch(error => {
      if (error.response) {
        notify.show('You have no recipes', 'success', 3000)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });

  axios.get(`${BASE_URL}/api-v1/categories/${catId}`, { headers })
    .then(response => {
      this.setState({ category_name: response.data.category_name })
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

export const createRecipe = (catId, recipeData) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.post(`${BASE_URL}/api-v1/categories/${catId}/recipes/`, recipeData, { headers })
    .then(response => {
      notify.show('Recipe created successfully', 'success', 4000);
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

export const editRecipe = (catId, recId, recipeData) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.put(`${BASE_URL}/api-v1/categories/${catId}/recipes/${recId}`, recipeData, { headers })
    .then(response => {
      notify.show('Recipe edited successfully', 'success', 4000);
      window.location.reload();
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

export const deleteRecipe = (catId, recId) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.delete(`${BASE_URL}/api-v1/categories/${catId}/recipes/${recId}`, { headers })
    .then(response => {
      window.location.reload();
      notify.show('Recipe deleted successfully', 'success', 1000);
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

export const searchRecipe = (catId, q) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.get(`${BASE_URL}/api-v1/categories/${catId}/recipes/?q=${q}`, { headers })
    .then(response => dispatch({
      type: VIEW_RECIPES,
      payload: response.data
    }))
    .catch(error => {
      if (error.response) {
        notify.show(error.response.data.message)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}

export const pageChange = (catId, page) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
  axios.get(`${BASE_URL}/api-v1/categories/${catId}/recipes/?page=${page}`, { headers })
    .then(response => dispatch({
      type: VIEW_RECIPES,
      payload: response.data
    }))
    .catch(error => {
      if (error.response) {
        notify.show(error.response.data.message)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}