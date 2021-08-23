import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container, ResumePost, Seo } from '../components';
import { Author } from '../components/Author.js';
import * as Typography from '../styled/Typography';
import OG_IMAGE from '../img/og_image.jpeg';
import './blog.css';

export default ({ data }) => {
  let queryData = data.markdownRemark.frontmatter;
  // let gitSVG = data.git.publicURL
  // console.log(queryData.keywords);
  // console.log(typeof newData)

  return (
    // <NoteWrapper>
    <Container>
      <Seo
        image={OG_IMAGE}
        title={queryData.title}
        author={queryData.author}
        keywords={queryData.keywords}
      />
      <ResumePost>
        {/* <blockquote>
          <p>
            Nothing lights up Advocates like creating a solution that changes
            people’s lives.
          </p>
        </blockquote> */}
        <Author />
        <Typography.H2>{queryData.description}</Typography.H2>
        <p style={{ marginBottom: '0.8rem' }}>
          <span role="img">⏳</span> {queryData.date}
        </p>
        {/* <MDXRenderer>{data.markdownRemark.html}</MDXRenderer> */}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </ResumePost>
    </Container>
  );
};

// 55549520-64fd-5e35-af32-edc323fc88ec
// b3e047f9-306c-5f21-a77b-f03e1ab7f0b4
// resume: 9aa40867-12c2-5628-921d-2eaf8e3caa6e
export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { slug: { eq: "resume" } }) {
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        author
        date(formatString: "MMM DD, YYYY")
        description
        keywords
        slug
        tag
        title
        excerpt
        lastEdited(formatString: "MMM DD, YYYY")
      }
      html
    }
  }
`;
