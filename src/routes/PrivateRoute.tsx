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
  return (
    <Route
      {...rest}
      render={props => {
        if (!token) {
          return <Redirect to={{ pathname: '/auth/login' }} />;
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default PrivateRoute;
