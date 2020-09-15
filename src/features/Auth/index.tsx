import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import Login from './Login';
import SignUp from './SignUp';

function Auth() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={Login} />
      <Route exact path={`${match.url}/sign-up`} component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Auth;
