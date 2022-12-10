/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

/* --- UI COMPONENTS --- */
import { SiteRoutesContext, SiteRoutesProvider } from "../context/context-site-routes";
import { AuthorElements, ResumeWrapper, } from "@design-system/index";
import {
    Author,
    Container,
    Seo
} from "@components/index";
import { I_Props } from "pages";
import { Props } from "templates/SinglePost";

/* --- IMAGES --- */
import yeehan_img from "@images/yee-han-chung.jpeg";

/* --- STYLED COMPONENTS --- */
const DateUpdated = styled.p`
    margin-bottom: 0.8rem;
`;

/* --- TYPES --- */

export default function AboutPageWrapper(props: I_Props & { data: Props; }): JSX.Element {
    return (
        <SiteRoutesProvider>
            <AboutPage location={props.location} data={props.data} />
        </SiteRoutesProvider>
    );
}

function AboutPage (props: I_Props & { data: Props; }): JSX.Element {
    const siteRoutesCtx = React.useContext(SiteRoutesContext);
    const currentRoute = props.location.pathname.split("/")[1];
    siteRoutesCtx.setRoute(currentRoute);
    
    const queryData = props.data.markdownRemark.frontmatter;

    return (
        <Container>
            <Seo
                image={yeehan_img}
                title={queryData.title}
                author={queryData.author}
                keywords={queryData.keywords}
            />

            <AuthorElements.AuthorWrapper>
                <AuthorElements.AuthorDetails>
                    <Author />
                </AuthorElements.AuthorDetails>
            </AuthorElements.AuthorWrapper>

            <ResumeWrapper.HomePage>
                <DateUpdated>
                    <span role="img">⏳</span>
                    {" "}
                    {queryData.date}
                </DateUpdated>
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.data.markdownRemark.html,
                    }}
                />
            </ResumeWrapper.HomePage>
        </Container>
    );
};

export const pageQuery = graphql`
    {
        markdownRemark(frontmatter: {slug: {eq: "about"}}) {
            fields {
                readingTime {
                    text
                }
            }
            frontmatter {
                author
                date(formatString: "MMM DD, YYYY")
                description
                keywords
                slug
                tag
                title
                excerpt
                lastEdited(formatString: "MMM DD, YYYY")
            }
            html
        }
    }
`;
