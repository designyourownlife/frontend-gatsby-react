/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [`job`,`project`, `blog`],
  singleTypes: [`about`],
  queryLimit: 5000,
}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "WebDev Portfolio",
    description: "This is a nice portfolio website",
    author: "ms.devtools",
    image: "/twitter-img.png", 
    siteURL: "https://designyourownlife.de",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,400i,700,700i`,
          `Open Sans\:400,400i,700,700i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}