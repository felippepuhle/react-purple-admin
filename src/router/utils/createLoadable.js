// @flow
import * as React from 'react';
import Loadable from 'react-loadable';

const createLoadable = (component: Promise<any>): React.Node =>
  Loadable({
    loader: () => component,
    loading() {
      return null;
    },
  });

export default createLoadable;
