import NotFound from '@/components/NotFound';
import useAuth from '@/hooks/useAuth';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function Auth() {
  useAuth();
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
