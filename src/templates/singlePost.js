import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { P, H2 } from "../elements"
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
  font-size: 12px;
  padding: 0 1rem 0 0rem;
`

const singlePost = ({ data }) => {
  const readingTime = data.mdx.fields.readingTime.text
  const excerpt = data.mdx.frontmatter.excerpt
  const { previous, next } = data

  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
      />
      <Post>
        <H2>{data.mdx.frontmatter.title}</H2>
        <p>
          <span>{data.mdx.frontmatter.date}</span>
          <span>{readingTime}</span>
        </p>
        <br/>
        <p>
          <Span>{excerpt}</Span>
        </p>
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
