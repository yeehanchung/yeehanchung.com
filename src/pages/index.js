import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Container, Post, Seo } from '../components';
import { Author } from '../components/Author.js';
import * as Typography from '../styled/Typography';
import OG_IMAGE from '../img/og_image.jpeg';

export const mainPageQuery = graphql`
  query ResumeQuery {
    mdx(frontmatter: { tag: { eq: "resume" } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
        author
        description
        keywords
      }
      # fields {
      #   readingTime {
      #     text
      #   }
      # }
    }
  }
`;

export default ({ data }) => {
  let metadata = data.mdx.frontmatter;

  return (
    <Container>
      <Seo
        image={OG_IMAGE}
        title={metadata.title}
        author={metadata.author}
        keywords={metadata.keywords}
      />
      <Post>
        <blockquote>
          <p>
            Nothing lights up Advocates like creating a solution that changes
            people’s lives.
          </p>
        </blockquote>
        <Author />
        <Typography.H2>{data.mdx.frontmatter.description}</Typography.H2>
        <p style={{ marginBottom: '0.8rem' }}>
          <span>⏳</span>
          {data.mdx.frontmatter.date}
        </p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  );
};
