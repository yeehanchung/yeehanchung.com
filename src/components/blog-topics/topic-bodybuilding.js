import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Topic, TopicTag, UnorderedList } from '../../styled';
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

export const NoteListing = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;
  padding: 1rem;
  column-width: 25rem;
  column-gap: 2rem;
`;

export const MuscleBuildingBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { tag: { eq: "bodybuilding" } } }
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              slug
              tag
              title
              lastEdited(formatString: "MMM DD, YYYY")
              excerpt
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
      # SVG by Gordon Johnson
      infinity: file(relativePath: { eq: "topic-svg/infinity.svg" }) {
        publicURL
      }
    }
  `);
  let newData = data.allMarkdownRemark.edges;
  let infinitySVG = data.infinity.publicURL;

  return (
    // <NoteWrapper>
    <Topic>
      <TopicTag>
        <span className="inner-tag-emoji">
          <img
            className="tag-emoji"
            src={infinitySVG}
            alt="Reinvention Logo"
            // height="2rem"
            // width="2rem"
          />
        </span>
        Reinvention
      </TopicTag>
      <UnorderedList>
        {newData.map((data) => {
          // console.log(data.node.frontmatter.lastEdited);
          // console.log(data.node.frontmatter.excerpt);
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
      </UnorderedList>
    </Topic>
  );
};
