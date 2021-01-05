import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, P6 } from "../elements"
import {
  Container,
  Post,
  Seo,
  Button,
  // ContentCard,
  // Content,
} from "../components"
import styled from "styled-components"

const Span = styled.span`
  padding: 0 1rem 0 0rem;
`

const singlePost = ({ data }) => {
  const readingTime = data.mdx.fields.readingTime.text
  const { previous, next } = data

  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
      />
      <Post>
        <Button href={data.mdx.frontmatter.slug} size="medium">
          {data.mdx.frontmatter.title}
        </Button>
        <P6 size="xSmall" color="dark2">
          <Span>{data.mdx.frontmatter.date}</Span>
          <Span>{readingTime}</Span>
        </P6>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        {/* <li>
          {
            <Link to={data.mdx.frontmatter.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          }
        </li> */}
      </Post>
    </Container>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
        excerpt
      }
      fields {
        readingTime {
          text
        }
      }
    }
    #
    # previous: mdx(id: { eq: $previousPostId }) {
    #   frontmatter {
    #     slug
    #     title
    #   }
    # }
  }
`
