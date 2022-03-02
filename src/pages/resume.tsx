/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

/* --- UI COMPONENTS --- */
import {
    AuthorElements,
    ResumeWrapper,
    Typography
} from "@design-system/index";
import {
    Author,
    Container,
    Seo
} from "@components/index";

/* --- IMAGES --- */
import yeehan_img from "@images/yee-han-chung.jpeg";

/* --- STYLED COMPONENTS --- */
const DateUpdated = styled.p`
    margin-bottom: 0.8rem;
`;

/* --- TYPES --- */
import { Props } from "templates/SinglePost";

export default function ({ data }: {
    data: Props
}): React.ReactElement {

    const queryData = data.markdownRemark.frontmatter;

    return (
        <Container>
            <Seo
                image={yeehan_img}
                title={queryData.title}
                author={queryData.author}
                keywords={queryData.keywords}
            />

            <AuthorElements.ResumeAuthorWrapper>
                <AuthorElements.AuthorDetails>
                    <Author />
                </AuthorElements.AuthorDetails>
            </AuthorElements.ResumeAuthorWrapper>

            <ResumeWrapper>
                <Typography.H2>{queryData.description}</Typography.H2>
                <DateUpdated>
                    <span role="img">⏳</span>
                    {" "}
                    {queryData.date}
                </DateUpdated>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                />
            </ResumeWrapper>
        </Container>
    );
}

export const pageQuery = graphql`
    {
        markdownRemark(frontmatter: {slug: {eq: "resume"}}) {
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
