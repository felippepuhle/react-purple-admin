// @flow
import * as React from 'react';
import { injectGlobal } from 'styled-components';
import chroma from 'chroma-js';

import 'bootstrap/dist/css/bootstrap.css';
import 'mdi/css/materialdesignicons.css';

import * as COLORS from './styles/colors';

// eslint-disable-next-line
injectGlobal`
  html,
  body,
  #root {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${chroma(COLORS.PRIMARY).brighten(2.85).saturate(0.5).luminance(0.85)};
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: initial;
    line-height: normal;
    -webkit-font-smoothing: antialiased;
  }
`;

type Props = {
  children: React.Node,
};

class App extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default App;
