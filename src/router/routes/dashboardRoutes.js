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
      path: buildPath(),
      component: createLoadable(import('../../components/home/Home')),
      exact: true,
    },
    {
      path: buildPath('ui/buttons'),
      component: createLoadable(import('../../components/ui/buttons/Buttons')),
      exact: true,
    },
  ],
};

export default dashboardRoutes;
