import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import { Container, Post, Seo } from '../components';
import { Author } from '../components/Author.js';
import { H2 } from '../elements';
import OG_image from '../img/og_image.jpeg';

export const mainPageQuery = graphql`
  query ResumeQuery {
    mdx(frontmatter: {tag: {eq: "resume"}}) {
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
  }
`;

export default ({data}) => {
  return (
    <Container>
      <Seo image={OG_image} title={"YeeHan Chung's Personal Website"} />
      <Post>
        <blockquote>
          <p>
            Nothing lights up Advocates like creating a solution that changes
            people’s lives.
          </p>
        </blockquote>
        <Author/>
        <H2>{data.mdx.frontmatter.title}</H2>
        <p style={{marginBottom: '0.8rem'}}>
          <span>⏳</span>{data.mdx.frontmatter.date}
        </p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  );
};
