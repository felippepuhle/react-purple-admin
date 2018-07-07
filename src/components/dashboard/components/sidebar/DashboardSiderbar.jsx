// @flow
import * as React from 'react';
import { Nav } from 'reactstrap';
import styled from 'styled-components';

import routeTo from '../../../../router/utils/routeTo';
import DashboardSiderbarItem from './components/DashboardSiderbarItem';

const Wrapper = styled.div`
  width: 260px;
  background: #FFF;
`;

const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  padding-left: 0;
`;

class DashboardSidebar extends React.PureComponent<*> {
  render() {
    return (
      <Wrapper>
        <StyledNav>
          <DashboardSiderbarItem
            icon="home"
            title="Dashboard"
            route={routeTo('dashboard')}
            isActive
          />

          <DashboardSiderbarItem
            icon="crosshairs-gps"
            title="Components"
            subitems={[
              {
                title: 'Buttons',
                route: routeTo('dashboard'),
              },
              {
                title: 'Grid System',
                route: routeTo('dashboard'),
              },
              {
                title: 'Panels',
                route: routeTo('dashboard'),
              },
              {
                title: 'Sweet Alert',
                route: routeTo('dashboard'),
              },
              {
                title: 'Notifications',
                route: routeTo('dashboard'),
              },
              {
                title: 'Icons',
                route: routeTo('dashboard'),
              },
              {
                title: 'Typography',
                route: routeTo('dashboard'),
              },
            ]}
          />
        </StyledNav>
      </Wrapper>
    );
  }
}

export default DashboardSidebar;
