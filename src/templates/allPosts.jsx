import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  Pagination,
  Post,
  Seo,
} from "../components"
import { H1, P } from "../elements"
// import myPhoto from "../img/yeehanchung.jpeg"
// Read the values they come in from gatsby-node.js
// data = data from graphql query

//

const allPosts = ({ pageContext, data }) => {
  const posts = data.allMdx.edges
  // Change to true if want to publish all posts
  const isPostAvailable = false

  return (
    <Container>
      <Seo title="YeeHan Chung | Blog" />
      <Content>
        {isPostAvailable ? (
          posts.map(post => (
            <ContentCard
              key={post.node.frontmatter.slug}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.frontmatter.excerpt}
              slug={post.node.frontmatter.slug}
              readingTime={post.node.fields.readingTime.text}
            />
          ))
        ) : (
          <>
            <P>No posts yet</P>
            <P size="small" color="dark4" margin="1rem 0 0 0" weight="normal">
              Feel free to connect with me
            </P>
          </>
        )}
        {/* Pagination */}
        {/* {isPostAvailable == true ? (
          <Pagination
            isFirst={isFirst}
            isLast={isLast}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        ) : (
          ""
        )} */}
      </Content>
    </Container>
  )
}

export default allPosts

// graphql query
export const pageQuery = graphql`
  query AllPostsQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tag: { eq: "blog" } } }
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
