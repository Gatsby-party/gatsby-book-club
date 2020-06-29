import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import BookItem from "../components/BookItem"
// import Image from "../components/image"
// import SEO from "../components/seo"

const LinkButton = styled.div`
  text-align: right;

  a {
    padding: 8px;
    background: rebeccapurple;
    color: white;
    border-radius: 8px;
    text-decoration: none;

    &:hover {
      background: indigo;
    }
  }
`

const IndexPage = props => {
  // console.log('IndexPage', props);

  return (
    <Layout>
      {props.data.allBook.edges.map(edge => {
        return (
          <BookItem
            key={edge.node.id}
            bookCover={edge.node.localImage.publicURL}
            bookTitle={edge.node.title}
            bookSummary={edge.node.summary}
            authorName={edge.node.author.name}
          >
            {/* <h2>
              {edge.node.title} - <small>{edge.node.author.name}</small>
            </h2>
            <div>{edge.node.summary}</div> */}
            <LinkButton>
              <Link to={`/book/${edge.node.id}`}>Join Conversation</Link>
            </LinkButton>
          </BookItem>
        )
      })}
    </Layout>
  )
}

// Use grafql in Gatsby
// grafql injects the results of the query into our props
// The shema below is from the a query in GraphiGL.
// To get it, just make a query in GraphiGL of the elements you want to show.
export const query = graphql`
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
`

export default IndexPage
