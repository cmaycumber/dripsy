/* eslint-disable @typescript-eslint/no-var-requires */
const { withUnimodules } = require('@expo/webpack-config/addons');
const { getModuleFileExtensions } = require('@expo/webpack-config/env');
const { getExpoBabelLoader } = require('@expo/webpack-config/utils');

const customizeExpoJsLoader = (config) => {
  const expoJsLoaderRule = getExpoBabelLoader(config);

  expoJsLoaderRule.use.options.plugins = expoJsLoaderRule.use.options.plugins || [];

  // We need to add the gatsby static queries babel plugin to expo js loader
  // otherwise gatsby will complain
  // see https://github.com/slorber/gatsby-plugin-react-native-web/issues/23
  expoJsLoaderRule.use.options.plugins.push([
    'babel-plugin-remove-graphql-queries',
    {},
    'babel-plugin-remove-graphql-queries-for-expo-js-loader',
  ]);

  return config;
};

exports.resolvableExtensions = () => getModuleFileExtensions('web');

exports.onCreateBabelConfig = ({ actions }, options) => {
  actions.setBabelPreset({
    name: require.resolve(`babel-preset-expo`),
    options,
  });
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const gatsbyConfig = getConfig();
  if (!gatsbyConfig.context) {
    throw new Error('Expected Gatsby config to provide the root context');
  }

  let config;
  try {
    config = customizeExpoJsLoader(withUnimodules(gatsbyConfig));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  actions.replaceWebpackConfig(config);
};
