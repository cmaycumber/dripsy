exports.onPreInit = ({ reporter }, options) => {}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
      type ThemeUiConfig implements Node {
        preset: JSON,
        prismPreset: JSON,
      }
    `)
}

exports.sourceNodes = (
  { actions, createContentDigest },
  { preset = {}, prismPreset = {} }
) => {
  const { createNode } = actions

  const themeUiConfig = {
    preset,
    prismPreset,
  }

  createNode({
    ...themeUiConfig,
    id: `gatsby-plugin-theme-ui-config`,
    parent: null,
    children: [],
    internal: {
      type: `ThemeUiConfig`,
      contentDigest: createContentDigest(themeUiConfig),
      content: JSON.stringify(themeUiConfig),
      description: `Options for gatsby-plugin-theme-ui`,
    },
  })
}