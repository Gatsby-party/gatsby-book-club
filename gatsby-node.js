// This file runs within the Node enviroment whenever Gatsby is generating
// a new version of our site.
// So here we can create roots and pages dynamicaly.

// Becuase we are in the Node enviroment, we import the whole file.
const path = require("path")

// Gatsby provides the 'graphql, actions' (and it uses Redux).
// 'createPages' is specifiek to Gatsby and it has to exactly like that 'createPages'.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const bookTemplate = path.resolve("src/templates/bookTemplate.js");
console.log('createPages', graphql, 'actions', actions );

  // Query all books to know what pages to create.
  return graphql(`
    {
      allBook {
        edges {
          node {
            id
            summary
            title
            localImage {
              publicURL
            }
            author {
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // A 'data' obj with an 'allBook' property (like in index.js).
    result.data.allBook.edges.forEach(book => {

      // Run the createPage action for each book.
      createPage({
        path: `/book/${book.node.id}`,
        component: bookTemplate,
        context: book.node,
      })
    })
  })
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
