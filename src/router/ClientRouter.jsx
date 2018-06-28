// @flow
import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

class ClientRouter extends React.PureComponent<*> {
  render() {
    return (
      <BrowserRouter>
        <Switch>{renderRoutes(routes)}</Switch>
      </BrowserRouter>
    );
  }
}

export default ClientRouter;
