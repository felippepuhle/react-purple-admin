const rewireStyledComponents = require('react-app-rewire-styled-components');
const CircularDependencyPlugin = require('circular-dependency-plugin');

/* config-overrides.js */
module.exports = function override(config, env) {
  const configWithStyled = rewireStyledComponents(config, env);

  configWithStyled.plugins.push(new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: true,
  }));

  return configWithStyled;
};

