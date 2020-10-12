import NotFound from '@/components/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GamePin from './GamePin';
import InGame from './InGame';

function PlayGame() {
  return (
    <Switch>
      <Route exact path="/" component={GamePin} />
      <Route exact path="/in-game" component={InGame} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default PlayGame;
