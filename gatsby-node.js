const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
const bookTemplate = path.resolve('src/templates/bookTemplates.js')
  // Query all books to know what pages to create
  return graphql(`
    {
      allBook {
        edges {
          node {
            id
            summary
            title
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
    // A 'data' obj with an 'allBook' property.
    result.data.allBook.edges.forEach(book => {
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
