// @flow
import * as React from 'react';
import { Nav } from 'reactstrap';
import styled from 'styled-components';

import routeTo from '../../../../router/utils/routeTo';
import DashboardSidebarAvatar from './components/DashboardSidebarAvatar';
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
          <DashboardSidebarAvatar
            image="http://www.bootstrapdash.com/demo/purple-admin-free/images/faces/face1.jpg"
            name="David Grey. H"
            description="Project Manager"
          />

          <DashboardSiderbarItem
            icon="home"
            title="Dashboard"
            route={routeTo('dashboard')}
            isActive
          />

          <DashboardSiderbarItem
            icon="crosshairs-gps"
            title="UI Elements"
            subitems={[
              {
                title: 'Buttons',
                route: routeTo('dashboard'),
              },
              {
                title: 'Typography',
                route: routeTo('dashboard'),
              },
            ]}
          />

          <DashboardSiderbarItem
            icon="format-list-bulleted"
            title="Forms"
            route={routeTo('dashboard')}
          />
        </StyledNav>
      </Wrapper>
    );
  }
}

export default DashboardSidebar;
