// @flow
import * as React from 'react';
import { renderRoutes } from 'react-router-config';

import DashboardContent from './components/DashboardContent';
import DashboardHeader from './components/DashboardHeader';

import type { RouteType } from '../../router/utils/types';

type Props = {
  route: RouteType,
};

class DashboardTemplate extends React.PureComponent<Props> {
  render() {
    const { route } = this.props;

    return (
      <React.Fragment>
        <DashboardHeader />

        <DashboardContent>
          {renderRoutes(route.routes)}
        </DashboardContent>
      </React.Fragment>
    );
  }
}

export default DashboardTemplate;