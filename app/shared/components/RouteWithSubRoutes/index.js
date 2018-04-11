import React from 'react';
import { Route } from 'react-router';
import { Meta } from '../../components'

const RouteWithSubRoutes = props => {
  const {
    path,
    computedMatch,
    component: Component,
    routes,
    restProps,
    meta
  } = props;

  return (
    <Route
      path={path}
      render={props => {
        // pass the sub-routes down to keep nesting
        return (
          <Meta {...meta}>
            <Component
              {...props}
              {...restProps}
              match={computedMatch}
              routes={routes}
            />
          </Meta>
        );
      }}
    />
  );
};

export default RouteWithSubRoutes;
