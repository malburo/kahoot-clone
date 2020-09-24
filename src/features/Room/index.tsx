import NotFound from '@/components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Lobby from './pages/Lobby';

function Room() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/:id`} component={Lobby} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Room;
