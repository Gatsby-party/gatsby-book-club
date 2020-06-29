import React from "react"
import styled from "styled-components"

// display: flex; = position side by side.
const BookItemWrapper = styled.section`
  display: flex;
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

const BookItemImageWrapper = styled.div`
  max-width: 200px;

  img {
    max-width: 200px;
  }
`

const BookItemContentWrapper = styled.div`
  flex-grow: 1;
  padding-left: 8px;
`

const BookItem = ({
  authorName,
  bookTitle,
  bookSummary,
  bookCover,
  children,
}) => {
  return (
    <BookItemWrapper>
      <BookItemImageWrapper>
        <img src={bookCover} alt="Book cover" />
      </BookItemImageWrapper>
      <BookItemContentWrapper>
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
      </BookItemContentWrapper>
    </BookItemWrapper>
  )
}
export default BookItem
