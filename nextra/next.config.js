/* eslint-disable @typescript-eslint/no-var-requires */
// @generated: @expo/next-adapter@2.1.0
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['dripsy'])
const { withExpo } = require('@expo/next-adapter')

module.exports = withPlugins([
	withExpo(
		withNextra(
			withTM({
				projectRoot: __dirname,
			})
		)
	),
])
