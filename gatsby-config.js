module.exports = {
  siteMetadata: {
    title: `Gatsby books`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`, // just a string or an object
    {
      // For every plugin we need to reference it in here.
      // Check the dependencie website for more info.
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Book',
            collection: 'books',
            map: doc => ({
              title: doc.title,
              summary: doc.summary,
              author___NODE: doc.author.id // "___NODE" is for GrafQL. 'id' is for the refference to the author 
            }),
          },
          {
            type: 'Authors',
            collection: 'authors',
            map: doc => ({
              name: doc.name,
            }),
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`, // plugin name
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
