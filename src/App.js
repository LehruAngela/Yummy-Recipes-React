import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import Notification from 'react-notify-toast';
import './styles/css/style.css'
import store from './store';
import { history } from './helpers/history';
import PrivateRoute from './helpers/privateRoutes';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ViewCategory from './components/categories/viewCategories';
import ViewRecipe from './components/recipes/viewRecipes';
import PageNotFound from './components/shared/pageNotFound';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Notification/>
        <Switch>
          <Route exact path='/' component={Register}/>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/categories' component={ViewCategory}/>
          <PrivateRoute exact path='/categories/:category_id/viewrecipes' component={ViewRecipe}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
