import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routerConfig from './routerConfig';
import './styles/App.less';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default () => (
  <Router>
    {routerConfig.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Router>
);