// @flow
import * as React from 'react';
import { injectGlobal } from 'styled-components';
import chroma from 'chroma-js';

import 'bootstrap/dist/css/bootstrap.css';

import * as COLORS from './styles/colors';
import * as FONTS from './styles/fonts';

// eslint-disable-next-line
injectGlobal`
  @font-face {
    font-family: 'ubuntu-light';
    src: url(${require('./assets/fonts/Ubuntu-Light.eot')});
    src: url(${require('./assets/fonts/Ubuntu-Light.woff2')}) format('woff2'),
        url(${require('./assets/fonts/Ubuntu-Light.woff')}) format('woff'),
        url(${require('./assets/fonts/Ubuntu-Light.ttf')})  format('truetype'),
  }
  @font-face {
    font-family: 'ubuntu-regular';
    src: url(${require('./assets/fonts/Ubuntu-Regular.eot')});
    src: url(${require('./assets/fonts/Ubuntu-Regular.woff2')}) format('woff2'),
        url(${require('./assets/fonts/Ubuntu-Regular.woff')}) format('woff'),
        url(${require('./assets/fonts/Ubuntu-Regular.ttf')})  format('truetype'),
  }
  @font-face {
    font-family: 'ubuntu-medium';
    src: url(${require('./assets/fonts/Ubuntu-Medium.eot')});
    src: url(${require('./assets/fonts/Ubuntu-Medium.woff2')}) format('woff2'),
        url(${require('./assets/fonts/Ubuntu-Medium.woff')}) format('woff'),
        url(${require('./assets/fonts/Ubuntu-Medium.ttf')})  format('truetype'),
  }
  @font-face {
    font-family: 'ubuntu-bold';
    src: url(${require('./assets/fonts/Ubuntu-Bold.eot')});
    src: url(${require('./assets/fonts/Ubuntu-Bold.woff2')}) format('woff2'),
        url(${require('./assets/fonts/Ubuntu-Bold.woff')}) format('woff'),
        url(${require('./assets/fonts/Ubuntu-Bold.ttf')})  format('truetype'),
  }

  html,
  body,
  #root {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${chroma(COLORS.PRIMARY).brighten(2.85).saturate(0.5).luminance(0.85)};
    font-size: 1rem;
    font-family: ${FONTS.REGULAR};
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
