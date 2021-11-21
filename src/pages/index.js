/* --- LIBRARIES --- */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

/* --- UI COMPONENTS --- */
import { Author, Container, Seo } from '../components';

/* --- IMAGES --- */
import OG_IMAGE from '../img/og_image.jpeg';

export const HomeWrapper = styled.div`
    font-family: ${(props) => props.theme.fonts.main};
    display: flex;
    flex-direction: column;
    max-width: 90ch;
    padding: 2rem 0 3rem;
    margin: 0 auto 2rem;
    align-items: center;

    h3 {
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0 0 0.25rem 0;
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

    a {
        color: ${(props) => props.theme.colors.main1};
        text-decoration: none;
    }
`;

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    image
                    url
                    keywords
                }
            }
        }
    `);

    return (
        <Container>
            <Seo
                image={OG_IMAGE}
                title={data.site.siteMetadata.title}
                author={data.site.siteMetadata.author}
                keywords={data.site.siteMetadata.keywords}
            />
            <HomeWrapper>
                <Author ogImage={OG_IMAGE} />
            </HomeWrapper>
        </Container>
    );
};

export default IndexPage;
