import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log(props)

  return (
    <Layout>
      {props.data.allBook.edges.map(edge => {
        return (
          <div key={edge.node.id}>
            <h2>
              {edge.node.title} - <small>{edge.node.author.name}</small>
            </h2>
            <div>{edge.node.summary}</div>
          </div>
        )
      })}
    </Layout>
  )
}

// grafql injects the results of the query into our props
export const query = graphql`
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
`

export default IndexPage
