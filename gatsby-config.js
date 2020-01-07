/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Joel Krause`,
    description: `Web Developer`,
    author: `@jkrs`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-github-pinned`,
      options: {
        apiToken: `a8af544fd8fe4772d9a97ce9a9bf24cd6cecf42c `
      }
    }
  ]
}
