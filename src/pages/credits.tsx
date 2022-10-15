/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";
import {
    graphql, Link, useStaticQuery
} from "gatsby";

/* --- UI COMPONENTS --- */
import { Container, Seo } from "@components/index";
import { PostWrapper } from "@design-system/index";

/* --- STYLED COMPONENTS --- */
const Span = styled.span`
    padding: 0 1rem 0 0;
`;

const Tag = styled.span`
    color: #ff5e62;
    padding: 0 1rem 0 0;
    font-weight: 700;
`;

const StyledPostContent = styled.div`
    code {
        background-color: var(--lightest-navy);
        color: var(--lightest-slate);
        padding: 0.2em 0.4em;
    }

    pre code {
        background-color: transparent;
        padding: 0;
    }
`;

const BackToNotes = styled(Link)`
    max-width: 90ch;
    margin: 3.5rem auto 2rem;
    display: block;
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;
`;

const LastEdited = styled.p`
    margin-top: 70px;
    margin-bottom: 0;
`;

export default (): JSX.Element => {

    const data = useStaticQuery(graphql`
        query {
            markdownRemark(frontmatter: {tag: {eq: "credits"}}) {
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
                    isDraft
                }
                html
            }
        }
    `);

    const readingTime = data.markdownRemark.fields.readingTime.text;
    const excerpt = data.markdownRemark.frontmatter.excerpt;
    const tag = data.markdownRemark.frontmatter.tag;

    return (
        <Container>
            <Seo
                image=""
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.excerpt}
            />
            <PostWrapper>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p>
                    <Span>{data.markdownRemark.frontmatter.date}</Span>
                    <Span>{readingTime}</Span>
                    <Span>{excerpt}</Span>
                    <Tag>
                        {"#"}
                        {tag}
                    </Tag>
                </p>
                <StyledPostContent
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                />
            </PostWrapper>
        </Container>
    );
};
