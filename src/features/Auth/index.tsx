import NotFound from '@/components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function Auth() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={Login} />
      <Route exact path={`${match.url}/register`} component={Register} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Auth;
