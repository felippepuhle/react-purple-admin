const rewireSass = require('react-app-rewire-scss');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const rewireArray = [rewireSass, rewireStyledComponents];

module.exports = function override(config, env) {
  const mergedConfigs = rewireArray.reduce(
    (accumulator, currentValue) => currentValue(accumulator, env),
    config,
  );

  mergedConfigs.plugins.push(new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: true,
  }));

  return mergedConfigs;
};

