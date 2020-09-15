const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/chadwickmaycumber/Documents/GitHub/dripsy/packages/docs/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-style-guide-src-template-js": hot(preferDefault(require("/Users/chadwickmaycumber/Documents/GitHub/dripsy/node_modules/gatsby-theme-style-guide/src/template.js"))),
  "component---src-pages-index-mdx": hot(preferDefault(require("/Users/chadwickmaycumber/Documents/GitHub/dripsy/packages/docs/src/pages/index.mdx"))),
  "component---src-pages-next-mdx": hot(preferDefault(require("/Users/chadwickmaycumber/Documents/GitHub/dripsy/packages/docs/src/pages/next.mdx")))
}

