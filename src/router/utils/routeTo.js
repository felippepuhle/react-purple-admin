// @flow
import allRoutes from '../routes';
import buildPath from './buildPath';

import type { RouteType, RouteParamsType } from './types';

const findPathByRouteName =
  (name: string, routes: Array<RouteType>, previous?: ?string = null): ?string =>
    routes.reduce(
      (accumulator: ?string, currentValue: RouteType) => {
        if (currentValue.name === name) {
          return currentValue.path;
        }

        if (currentValue.routes) {
          return findPathByRouteName(name, currentValue.routes, accumulator);
        }

        return accumulator;
      },
      previous,
    );

const replaceParams = (path: string, params: RouteParamsType): string =>
  Object.keys(params).reduce(
    (accumulator, currentValue) => path.replace(`:${currentValue}`, params[currentValue]),
    path,
  );

const routeTo = (name: string, params: RouteParamsType = {}): string => {
  const path = findPathByRouteName(name, allRoutes);
  if (!path) {
    return buildPath();
  }

  return replaceParams(path, params);
};

export default routeTo;
