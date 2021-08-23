import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
// import { P, TopicTag, A } from "../elements"
import { Container, Post, Seo } from '../components';

const Span = styled.span`
  padding: 0 1rem 0 0rem;
`;

const Tag = styled.span`
  color: #ff5e62;
  padding: 0 1rem 0 0rem;
  font-weight: 700;
`;

// const Spanner = styled.span`
//   padding: 0 1rem 0 0rem;
// `;

const StyledPostContent = styled.div`
  code {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
    /* border-radius: var(--border-radius); */
    /* font-size: var(--fz-sm); */
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;

/**
 *
 * @param {*} param0
 * @returns
 */
const BackToNotes = styled(Link)`
  /* padding: 2rem 0; */
  max-width: 90ch;
  /* padding: 2rem 0rem 3rem; */
  margin: 3.5rem auto 2rem;
  display: block;
  color: ${(props) => props.theme.colors.link};
  text-decoration: none;
  /* font-size: var(--font-size-base); */
`;

export default ({ data }) => {
  const readingTime = data.markdownRemark.fields.readingTime.text;
  const excerpt = data.markdownRemark.frontmatter.excerpt;
  const tag = data.markdownRemark.frontmatter.tag;
  const lastEdited = data.markdownRemark.frontmatter.lastEdited;
  console.log(data);

  return (
    <Container>
      <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.excerpt}
      />
      <Post>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p style={{ marginBottom: '50px' }}>
          <Span>{data.markdownRemark.frontmatter.date}</Span>
          <Span>{readingTime}</Span>
          <Span>{excerpt}</Span>
          <Tag>
            {'#'}
            {tag}
          </Tag>
        </p>
        {/* <p>
          <Span>{excerpt}</Span>
        </p> */}
        {/* <MDXRenderer>{data.mdx.body}</MDXRenderer> */}
        <StyledPostContent
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        {/* <li>
          {
            <Link to={data.mdx.frontmatter.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          }
        </li> */}
        <p style={{ marginTop: '70px', marginBottom: '0' }}>
          Last edited: {lastEdited}
        </p>
        <BackToNotes to={'/tech'}>← Back to notes</BackToNotes>
      </Post>
    </Container>
  );
};

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { tag: { eq: "credits" } }) {
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
