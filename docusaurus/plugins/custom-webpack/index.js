/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
// const createExpoWebpackConfigAsync = require('@expo/webpack-config')
const { withUnimodules } = require('@expo/webpack-config/addons')
const { resolver } = require('../../metro.config')
const root = path.resolve(__dirname, '../../..')
const nodeModules = path.join(__dirname, '../../node_modules')

module.exports = function () {
	return {
		name: 'docusaurus-plugin-dripsy',
		async configureWebpack(config, isServer, utils) {
			// Add Expo support...
			const configWithExpo = withUnimodules(config, {
				projectRoot: root,
				babel: {
					dangerouslyAddModulePathsToTranspile: ['dripsy'],
				},
			})

			configWithExpo.module.rules.push({
				test: /\.(js|ts|tsx)$/,
				include: path.resolve(root, 'src'),
				use: 'babel-loader',
			})

			// We need to make sure that only one version is loaded for peerDependencies
			// So we alias them to the versions in example's node_modules
			Object.assign(configWithExpo.resolve.alias, {
				...resolver.extraNodeModules,
				'react-native-web': path.join(nodeModules, 'react-native-web'),
			})

			return configWithExpo
		},
	}
}
