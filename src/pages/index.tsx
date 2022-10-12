/* --- NODE MODULES --- */
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import React from "react";

/* --- UI COMPONENTS --- */
import {
    Author,
    Container,
    Seo
} from "@components/index";
import { AuthorElements, ResumeWrapper } from "@design-system/index";

/* --- IMAGES --- */
import og_img from "@images/og_image.jpeg";

/* --- STYLED COMPONENTS --- */
const AuthorWrapper = styled.div`
    font-family: ${(props) => props.theme.fonts.main};
    display: flex;
    flex-direction: column;
    max-width: 90ch;
    padding: 2rem 0 0;
    margin: 0 auto 0;
    align-items: center;
`;

const IndexPage = (): React.ReactElement => {

    const personalData = useStaticQuery(graphql`
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
            markdownRemark(frontmatter: {slug: {eq: "featured-experience"}}) {
            html
        }
        }
    `);

    return (
        <Container>
            <Seo
                image={og_img}
                title={personalData.site.siteMetadata.title}
                author={personalData.site.siteMetadata.author}
                keywords={personalData.site.siteMetadata.keywords}
            />

            <AuthorWrapper>
                <AuthorElements.AuthorDetails>
                    <Author ogImage={og_img} />
                </AuthorElements.AuthorDetails>
            </AuthorWrapper>

            <ResumeWrapper.ResumeWrapperV2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: personalData.markdownRemark.html,
                    }}
                />
            </ResumeWrapper.ResumeWrapperV2>

        </Container>
    );
};

export default IndexPage;
