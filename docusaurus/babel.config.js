/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const pak = require('../package.json')

module.exports = function (api) {
	api.cache(true)
	return {
		presets: [
			require.resolve('@docusaurus/core/lib/babel/preset'),
			'babel-preset-expo',
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
