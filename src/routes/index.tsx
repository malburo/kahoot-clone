import AuthLayout from '@/components/layouts/AuthLayout';
import BlankLayout from '@/components/layouts/BlankLayout';
import CreatorLayout from '@/components/layouts/CreatorLayout';
import KahootLayout from '@/components/layouts/KahootLayout';
import NotFound from '@/components/NotFound';
import Auth from '@/features/Auth';
// import Creator from '@/features/Kahoot/pages/Creator';
import Kahoot from '@/features/Kahoot';
import PlayGame from '@/features/PlayGame/PlayGame';
import Room from '@/features/Room';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const RoutesComponent = () => (
  <BrowserRouter>
    <Suspense fallback={Auth}>
      <Switch>
        <PublicRoute path="/auth" component={Auth} layout={AuthLayout} />
        <PublicRoute path="/kahoots" component={Kahoot} layout={KahootLayout} />
        {/* <PublicRoute
          path="/creator"
          component={Creator}
          layout={CreatorLayout}
        /> */}
        <PublicRoute
          path="/play-game"
          component={PlayGame}
          layout={BlankLayout}
        />
        <PublicRoute path="/rooms" component={Room} layout={BlankLayout} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default RoutesComponent;
