/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";

/* --- UI COMPONENTS --- */
import { Container, Seo } from "@components/index";
import { PostWrapper } from "@design-system/index";
import { Props } from "templates/SinglePost";

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

export default ({ data }: {data: Props}) => {

    const readingTime = data.markdownRemark.fields.readingTime.text;
    const excerpt = data.markdownRemark.frontmatter.excerpt;
    const tag = data.markdownRemark.frontmatter.tag;
    const lastEdited = data.markdownRemark.frontmatter.lastEdited;

    return (
        <Container>
            <Seo
                image=""
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.excerpt}
            />
            <PostWrapper>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p style={{ marginBottom: "50px" }}>
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
                <LastEdited>
                    Last edited: {lastEdited}
                </LastEdited>
                <BackToNotes to={"/"}>← Back to home</BackToNotes>
            </PostWrapper>
        </Container>
    );
};

export const creditsQuery = graphql`
    {
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
`;
