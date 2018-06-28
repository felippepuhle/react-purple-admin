// @flow
import * as React from 'react';
import { renderRoutes } from 'react-router-config';

import type { RouteType } from '../../router/utils/types';

type Props = {
  route: RouteType,
};

class DashboardTemplate extends React.PureComponent<Props> {
  render() {
    const { route } = this.props;

    return (
      <React.Fragment>
        {renderRoutes(route.routes)}
      </React.Fragment>
    );
  }
}

export default DashboardTemplate;