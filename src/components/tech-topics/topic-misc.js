import React from 'react';
import { TopicTag } from '../../styled';
// import { Button } from "."
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { TopicListing } from './index';

// const Row = styled.div`
//   flex-direction: row;
//   display: flex;
//   /* justify-content: space-between; */
//   align-self: flex-end;
// `;

// const Span = styled.span`
//   padding: 0 1rem 0 0rem;
// `;

export const Topic = styled.div`
  margin: 20px 0 0 0;
  break-inside: avoid;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  /* padding: 1rem; */
  border-radius: var(--border-radius, 2px);
`;

export const NoteListing = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;
  padding: 1rem;
  column-width: 25rem;
  column-gap: 2rem;
`;

export const MiscNotes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { tag: { eq: "misc" } } }
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              slug
              tag
              title
              excerpt
              lastEdited(formatString: "MMM DD, YYYY")
            }
            id
            fields {
              readingTime {
                text
              }
            }
          }
        }
      }
      docusaurus: file(relativePath: { eq: "topic-svg/misc.svg" }) {
        publicURL
      }
    }
  `);
  let newData = data.allMarkdownRemark.edges;
  let docusaurusSVG = data.docusaurus.publicURL;

  return (
    // <NoteWrapper>
    <Topic>
      <TopicTag>
        <span className="inner-tag-emoji">
          <img className="tag-emoji" src={docusaurusSVG} alt="Misc Logo" />
        </span>
        Misc
      </TopicTag>
      <Ul>
        {/* <Listing newData={newData} /> */}
        {newData.map((data) => {
          return (
            <TopicListing
              key={data.node.frontmatter.slug}
              date={data.node.frontmatter.date}
              title={data.node.frontmatter.title}
              excerpt={data.node.frontmatter.excerpt}
              slug={data.node.frontmatter.slug}
              readingTime={data.node.fields.readingTime.text}
              lastEdited={data.node.frontmatter.lastEdited}
            />
          );
        })}
      </Ul>
    </Topic>
  );
};
