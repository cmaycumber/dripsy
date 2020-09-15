// Make .env variables accessible
const remarkPlugins = [require('remark-slug')]
module.exports = {
	siteMetadata: {
		title: `Dripsy Docs`,
		description: `Dripsy documentation`,
		author: `Chad Maycumber `,
	},
	plugins: [
		`gatsby-plugin-theme-ui`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-catch-links`,
		'gatsby-plugin-theme-ui',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				remarkPlugins,
			},
		},
		{
			resolve: 'gatsby-theme-style-guide',
			options: {
				basePath: '/style-guide-demo',
			},
		},
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		path: `../../assets`,
		// 	},
		// },
		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Vitruly`,
		// 		short_name: `Vitruly`,
		// 		start_url: `/`,
		// 		background_color: `#663399`,
		// 		theme_color: `#663399`,
		// 		display: `minimal-ui`,
		// 		icon: `../../assets/favicon.png`, // This path is relative to the root of the site.
		// 	},
		// },
		{
			resolve: 'gatsby-plugin-alias-imports',
			options: {
				alias: {
					'@components': 'src/components',
				},
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/, // See below to configure properly
				},
			},
		},
		{
			resolve: 'gatsby-plugin-create-client-paths',
			options: { prefixes: [`/consultation/*`] },
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		`gatsby-plugin-offline`,
	],
}
