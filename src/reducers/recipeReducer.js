import { VIEW_RECIPES } from '../actions/types';

const initialState = {
  recipes: [],
  page: '',
  total: ''
}
export default function (state = initialState, action) {
  switch (action.type) {
    case VIEW_RECIPES:
      return {
        ...state,
        recipes: action.payload.results,
        page: action.payload.page,
        total: action.payload.total
      }
    default:
      return state;
  }
}