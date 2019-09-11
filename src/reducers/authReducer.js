import { REGISTER_USER } from '../actions/types';

const initialState = {
  username: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        username: action.username
      }
    default:
      return state;
  }
}
