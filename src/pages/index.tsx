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
import { SiteRoutesContext, SiteRoutesProvider } from "../context/context-site-routes";

/* --- IMAGES --- */
import og_img from "@images/og_image.jpeg";

/* --- STYLED COMPONENTS --- */

export interface I_Props {
    location: {
        pathname: string;
    };
}

export default function IndexPageWrapper(props: I_Props): JSX.Element {
    return (
        <SiteRoutesProvider>
            <IndexPage location={props.location} />
        </SiteRoutesProvider>
    );
}

const IndexPage = (props: I_Props): JSX.Element => {

    const siteRoutesCtx = React.useContext(SiteRoutesContext);
    const currentRoute = props.location.pathname;
    siteRoutesCtx.setRoute(currentRoute);

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
            markdownRemark(frontmatter: {slug: {eq: "featured-experience"}}) {
                html
            }
        }
    `);

    return (
        <Container>
            <Seo
                image={og_img}
                title={data.site.siteMetadata.title}
                author={data.site.siteMetadata.author}
                keywords={data.site.siteMetadata.keywords}
            />

            <AuthorElements.AuthorWrapper>
                <AuthorElements.AuthorDetails>
                    <Author ogImage={og_img} />
                </AuthorElements.AuthorDetails>
            </AuthorElements.AuthorWrapper>

            <ResumeWrapper.HomePage>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                />
            </ResumeWrapper.HomePage>

        </Container>
    );
};
