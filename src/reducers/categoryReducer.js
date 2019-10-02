import { VIEW_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY } from '../actions/types';

const initialState = {
  categories: [],
  newCategory: {},
  total: '',
  deletedCategory: '',
}
export default function (state = initialState, action) {
  switch (action.type) {
    case VIEW_CATEGORIES:
      return {
        ...state,
        categories: action.payload.results.reverse(),
        total: action.payload.total,
        newCategory: action.payload.category_name
      }
    case CREATE_CATEGORY:
      return {
        ...state,
        newCategory: action.payload
      }
    case DELETE_CATEGORY:
      return {
        ...state,
        deletedCategory: action.payload[1]
      }
    default:
      return state;
  }
}
