import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';
import { notify } from 'react-notify-toast';

export const viewCategory = () => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.get(`${BASE_URL}/api-v1/categories/`, { headers })
    .then(response => {
      this.setState({ categories: response.data.results, page: response.data.page, total: response.data.total })
    })
    .catch(error => {
      if (error.response) {
        notify.show('You have no categories', 'success', 3000)
      }
      else if (error.request) {
        alert('Request not made')
      }
    });
}

export const searchCategory = (q) => dispatch => {
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

export const deleteCategory = (catId) => dispatch => {
  let headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  axios.delete(`${BASE_URL}/api-v1/categories/${catId}`, { headers })
    .then(response => {
      notify.show('Category deleted successfully', 'success', 4000);
      if (this.state.categories.length === 1) {
        this.setState({ categories: [] });
      }
      else {
        this.handleViewCategory();
      }
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
