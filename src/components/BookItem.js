import React from "react"
import styled from "styled-components"

const BookItemWrapper = styled.section`
  border: 5px solid #ddd;
  background: white;
  padding: 8px;
  margin-bottom: 8px;

  h2 {
    small {
      font-weight: normal;
      font-size: 14px;
      padding-left: 8px;
    }
  }
`
const BookItem = ({ authorName, bookTitle, bookSummary, bookCover, children }) => {
  return (
    <BookItemWrapper>
        <img src={bookCover} alt='Book cover' />
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
        {bookTitle} <small>{authorName}</small>
      </h2>
      <p>{bookSummary}</p>
      <div>{children}</div>
    </BookItemWrapper>
  )
}
export default BookItem
