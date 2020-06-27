import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import BookItem from "../components/BookItem"
// import Image from "../components/image"
// import SEO from "../components/seo"

const LinkButton = styled.div`
text-align: right;

a{
  padding: 8px;
  background: rebeccapurple;
  color: white;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background: indigo;
  }
}
`;

const IndexPage = props => {
  // console.log(props)

  return (
    <Layout>
      {props.data.allBook.edges.map(edge => {
        return (
          <BookItem key={edge.node.id}
          bookCover={edge.node.imageUrl}
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

// grafql injects the results of the query into our props
export const query = graphql`
  {
    allBook {
      edges {
        node {
          id
          summary
          title
          imageUrl
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
