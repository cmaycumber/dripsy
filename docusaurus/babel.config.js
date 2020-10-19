/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const pak = require('../package.json')

module.exports = function (api) {
	api.cache(true)
	return {
		presets: [
			'babel-preset-expo',
			require.resolve('@docusaurus/core/lib/babel/preset'),
		],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						// For development, we want to alias the library to the source
						[pak.name]: path.join(__dirname, '..', pak.source),
					},
				},
			],
		],
	}
}
