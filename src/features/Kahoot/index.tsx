import { AppDispatch } from '@/app/store';
import NotFound from '@/components/NotFound';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Creator from './Creator';
import { getKahoots } from './kahootSlice';
import MyKahoot from './MyKahoot';

function Kahoot() {
  const match = useRouteMatch();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchKahootList() {
      dispatch(getKahoots());
    }
    fetchKahootList();
  }, [dispatch]);
  return (
    <Switch>
      <Route exact path={match.url} component={MyKahoot} />
      <Route exact path={`${match.url}/:kahootId`} component={Creator} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Kahoot;
