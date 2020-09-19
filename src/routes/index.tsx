import AuthLayout from '@/components/layouts/AuthLayout';
// import CreatorLayout from '@/components/layouts/CreatorLayout';
import KahootLayout from '@/components/layouts/KahootLayout';
import NotFound from '@/components/NotFound';
import Auth from '@/features/Auth';
// import Creator from '@/features/Creator/Creator';
import Kahoot from '@/features/Kahoot';
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
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default RoutesComponent;
