module.exports = {
  siteMetadata: {
    title: `Gatsby books`,
    description: `A webpage with books.`,
    author: `Fotis Tsakiris - Udemy course`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`, // just a string or an object
    {
      // For every plugin we need to reference it in here.
      // Check the dependency's website for more info.
      resolve: "gatsby-firesource",
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: "Book",
            collection: "books",
            map: doc => ({
              title: doc.title,
              summary: doc.summary,
              author___NODE: doc.author.id, // "___NODE" is to query author from GrafQL. 'id' is for the refference to the author
              imageUrl: doc.imageUrl,
            }),
          },
          {
            type: "Authors",
            collection: "authors",
            map: doc => ({
              name: doc.name,
            }),
          },
        ],
      },
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "Book", // everything that comes after the allBook graphql query
        imagePath: "imageUrl", // the node on the path
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
