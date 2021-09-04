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

export const GitNotes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { tag: { eq: "git" } } }
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
      git: file(relativePath: { eq: "topic-svg/git.svg" }) {
        publicURL
      }
    }
  `);
  let newData = data.allMarkdownRemark.edges;
  let gitSVG = data.git.publicURL;
  // console.log(javascriptSVG)
  // console.log(typeof newData)

  return (
    // <NoteWrapper>
    <Topic>
      <TopicTag>
        <span className="inner-tag-emoji">
          <img className="tag-emoji" src={gitSVG} alt="Git Logo" />
        </span>
        Git
      </TopicTag>
      <UnorderedList>
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
      </UnorderedList>
      {/* <Ul> */}
      {/* <TopicDecision
          title={title}
          slug={slug}
          excerpt={excerpt}
          readingTime={readingTime}
          date={date}
        /> */}
      {/* </Ul> */}
      {/* <Topics title={title} slug={slug}></Topics> */}
      {/* <Button href={slug} size="medium">
        {title}
      </Button> */}
      {/* <P size="xSmall" color="dark2" margin="0 0 18px 0">
        <Span>{date}</Span>
        <Span>{readingTime}</Span>
      </P>
      <P size="xMedium" color="dark4">
        {excerpt}
      </P>
      <Row>
        <Button href={slug} size="small">
          Read more
        </Button>
      </Row> */}
      {/* </NoteWrapper> */}
    </Topic>
  );
};
