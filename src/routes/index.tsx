import AuthLayout from '@/components/layouts/AuthLayout';
import BlankLayout from '@/components/layouts/BlankLayout';
import KahootLayout from '@/components/layouts/KahootLayout';
import NotFound from '@/components/NotFound';
import Auth from '@/features/Auth';
import Kahoot from '@/features/Kahoot';
import PlayGame from '@/features/PlayGame';
import Room from '@/features/Room';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const RoutesComponent = () => (
  <BrowserRouter>
    <Suspense fallback={Auth}>
      <Switch>
        <PublicRoute path="/auth" component={Auth} layout={AuthLayout} />
        <PrivateRoute
          path="/kahoots"
          component={Kahoot}
          layout={KahootLayout}
        />
        <PrivateRoute path="/rooms" component={Room} layout={BlankLayout} />
        <PublicRoute path="/" component={PlayGame} layout={BlankLayout} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default RoutesComponent;
