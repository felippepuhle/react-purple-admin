// @flow
import buildPath from '../utils/buildPath';
import createLoadable from '../utils/createLoadable';

// Template
import DashboardTemplate from '../../components/dashboard/DashboardTemplate';

const dashboardRoutes = {
  path: buildPath(),
  component: DashboardTemplate,
  routes: [
    {
      name: 'dashboard',
      path: buildPath(),
      component: createLoadable(import('../../components/home/Home')),
      exact: true,
    },
  ],
};

export default dashboardRoutes;
