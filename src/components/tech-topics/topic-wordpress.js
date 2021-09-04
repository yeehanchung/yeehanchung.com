import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Topic, TopicTag, UnorderedList } from '../../styled';
import { TopicListing } from './index';
import './styles/styles.css';

export const NoteListing = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;
  padding: 1rem;
  column-width: 25rem;
  column-gap: 2rem;
`;

export const WordPressNotes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { tag: { eq: "wordpress" } } }
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
      wordpress: file(relativePath: { eq: "topic-svg/wordpress.svg" }) {
        publicURL
      }
    }
  `);
  let newData = data.allMarkdownRemark.edges;
  let wordpressSVG = data.wordpress.publicURL;
  // console.log('Hello');
  return (
    <Topic>
      <TopicTag>
        <div className="inner-tag-emoji">
          <img className="tag-emoji" src={wordpressSVG} alt="WordPress Logo" />
        </div>
        WordPress
      </TopicTag>
      <UnorderedList>
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
      </UnorderedList>
    </Topic>
  );
};

// <TopicContainer data={newData} svg={wordpressSVG}></TopicContainer>
