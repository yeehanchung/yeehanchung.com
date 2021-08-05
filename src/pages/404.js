// import { graphql } from 'gatsby';
import React from 'react';
import { Container, Content } from '../components';
import * as Typography from '../styled/Typography';

const notFound = ({ data }) => {
  return (
    <Container>
      <Content>
        <Typography.P>Error 404</Typography.P>
        <Typography.P size="small" color="dark4" margin="1rem 0 0 0">
          We could not find what you are looking for...
        </Typography.P>
      </Content>
    </Container>
  );
};

export default notFound;

/**
 * 404 Not found JPG
 */
// export const notFoundQuery = graphql`
//   query NotFoundQuery {
//     imageSharp(fixed: { originalName: { eq: "404-error.jpg" } }) {
//       fixed(width: 1200, height: 480) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// `;
