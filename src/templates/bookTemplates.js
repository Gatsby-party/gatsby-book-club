import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components';

const BookTemplate = (props) => {
    console.log(props);
    
  return (
    <Layout>
      <section>
          <h2>
              {/* Check the gatsby-node.js where we configure the context of this page.
            There you see in graphql that we return this:
             node {
            id
            summary
            title
            author {
              name
            }
            So we can do props.pageContext.anything-inside-node 
            */}
              {props.pageContext.title} - <small>{props.pageContext.author.name}</small>
          </h2>
          <p>
              {props.pageContext.summary}
          </p>
      </section>
    </Layout>
  )
}

export default BookTemplate
