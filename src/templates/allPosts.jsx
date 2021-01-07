import React from "react"
import { graphql } from "gatsby"
import { Container, Content, ContentCard, Pagination, Post, Seo } from "../components"
import { H1, P, P6 } from "../elements"
// import myPhoto from "../img/yeehanchung.jpeg"
// Read the values they come in from gatsby-node.js
// data = data from graphql query

//

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  // if page 2 - 1 = 1
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`
  const posts = data.allMdx.edges
  // Change to true if want to publish all posts
  const isPostAvailable = false

  return (
    <Container>
      <Seo title="YeeHan Chung's Blogs" />
      <Content>
        {isPostAvailable ? (
          posts.map(post => (
            <P>
              <ContentCard
                key={post.node.frontmatter.slug}
                date={post.node.frontmatter.date}
                title={post.node.frontmatter.title}
                excerpt={post.node.frontmatter.excerpt}
                slug={post.node.frontmatter.slug}
                readingTime={post.node.fields.readingTime.text}
              />
            </P>
          ))
        ) : (
          <>
            <P6>No posts yet</P6>
            <P size="small" color="dark4" margin="1rem 0 0 0" weight="normal">
              Feel free to connect with me
            </P>
          </>
        )}
      </Content>
      {/* Pagination */}
      {isPostAvailable == true ? (
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      ) : (
        ""
      )}
    </Container>
  )
}

export default allPosts

// graphql query
export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            excerpt
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
