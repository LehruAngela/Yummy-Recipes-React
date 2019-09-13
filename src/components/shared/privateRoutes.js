import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ component: Values, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      window.localStorage.getItem('accessToken')
        ? (<Values {...props} />)
        : (<Redirect to={{ pathname: '/login' }} />
        ))}
  />
);

export default PrivateRoute;
