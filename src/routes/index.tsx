import AuthLayout from '@/components/layouts/AuthLayout';
import NotFound from '@/components/NotFound';
import Auth from '@/features/Auth';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={Auth}>
        <Switch>
          <PublicRoute path="/auth" component={Auth} layout={AuthLayout} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesComponent;
