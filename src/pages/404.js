// import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../components';
import * as Typography from '../styled/Typography';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${(props) => props.theme.fonts.main};
    padding: 3rem 0;
    max-width: 90ch;
    padding: 2rem 0 3rem;
    margin: 0 auto 2rem;
    align-items: center;
`;

const notFound = ({ data }) => {
    return (
        <Container>
            <HomeWrapper>
                <Typography.P>Error 404</Typography.P>
                <Typography.P size="small" color="dark4" margin="1rem 0 0 0">
                    We could not find what you are looking for...
                </Typography.P>
            </HomeWrapper>
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
