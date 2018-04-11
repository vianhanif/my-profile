import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '../shared/components'
import routes from '@routes/'

export default () => (
  <Switch>
    {routes.map(route => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
  </Switch>
);
