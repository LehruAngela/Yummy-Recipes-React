import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Notification from 'react-notify-toast';
import store from './store';
import './styles/css/style.css'
import Register from './components/register';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Notification/>
        <Switch>
          <Route exact path='/' component={Register} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
