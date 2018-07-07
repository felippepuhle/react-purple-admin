// @flow
import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

import DashboardSiderbar from './components/sidebar/DashboardSiderbar';
import DashboardHeader from './components/DashboardHeader';

import type { RouteType } from '../../router/utils/types';

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Body = styled.div`
  padding: 2.75rem 2.25rem;
  flex: 1;
`;

type Props = {
  route: RouteType,
};

class DashboardTemplate extends React.PureComponent<Props> {
  render() {
    const { route } = this.props;

    return (
      <React.Fragment>
        <DashboardHeader />

        <Content>
          <DashboardSiderbar />

          <Body>
            {renderRoutes(route.routes)}
          </Body>
        </Content>
      </React.Fragment>
    );
  }
}

export default DashboardTemplate;