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
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-catch-links`,
		'gatsby-plugin-react-helmet',
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
	],
}
