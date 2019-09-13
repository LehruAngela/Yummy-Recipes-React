import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Notification from 'react-notify-toast';
import store from './store';
import './styles/css/style.css'
import PrivateRoute from './components/shared/privateRoutes';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ViewCategory from './components/categories/viewCategories';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Notification/>
        <Switch>
          <Route exact path='/' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/categories' component={ViewCategory} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
