import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Topic, TopicTag, UnorderedList } from '../../styled';
import { TopicListing } from './index';

export const CliNotes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { tag: { eq: "cli" } } }
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
      cli: file(relativePath: { eq: "topic-svg/cli.svg" }) {
        publicURL
      }
    }
  `);
  let newData = data.allMarkdownRemark.edges;
  let cliSVG = data.cli.publicURL;

  return (
    <Topic>
      <TopicTag>
        <span className="inner-tag-emoji">
          <img className="tag-emoji" src={cliSVG} alt="WordPress Logo" />
        </span>
        CLI
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
