import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Container, Seo } from '../components';
import { Author } from '../components/Author.js';
import OG_IMAGE from '../img/og_image.jpeg';
import './blog.css';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.main};
  padding: 3rem 0;
  max-width: 90ch;
  padding: 2rem 0rem 3rem;
  margin: 0 auto 2rem;
  align-items: center;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin: 2rem 0 1rem 0;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0.8rem 0 0.25rem 0;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: hsl(227, 2%, 26%);
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-bottom: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { tag: { eq: "resume" } }) {
        html
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
          excerpt
          tag
          title
          lastEdited(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `);
  let queryData = data.markdownRemark.frontmatter;

  return (
    <Container>
      <Seo
        image={OG_IMAGE}
        title={queryData.title}
        author={queryData.author}
        keywords={queryData.keywords}
      />
      <HomeWrapper>
        <Author ogImage={OG_IMAGE} />
      </HomeWrapper>
    </Container>
  );
};

export default IndexPage;
