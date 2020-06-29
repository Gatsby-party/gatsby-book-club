import React from "react"
import Layout from "../components/layout"
import BookItem from "../components/BookItem"

const BookTemplate = props => {
  // console.log('BookTemplate', props.pageContext)

  return (
    <Layout>
      <BookItem
        bookCover={props.pageContext.localImage.publicURL} // undefined!!!
        bookTitle={props.pageContext.title}
        bookSummary={props.pageContext.summary}
        authorName={props.pageContext.author.name}
      />
    </Layout>
  )
}

export default BookTemplate
