import NotFound from '@/components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MyKahoot from './MyKahoot';

function Kahoot() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/my-kahoot`} component={MyKahoot} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Kahoot;
