import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: any;
  layout: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const token = localStorage.access_token;
  if (!token) {
    return <Redirect to={'/auth/login'} />;
  }
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default PrivateRoute;
