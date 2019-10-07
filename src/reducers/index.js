import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
  auth: authReducer,
  category: categoryReducer,
  recipe: recipeReducer,
});
