import NotFound from '@/components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Creator from './Creator';
import MyKahoot from './MyKahoot';

function Kahoot() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MyKahoot} />
      <Route exact path={`${match.url}/:kahootId`} component={Creator} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Kahoot;
