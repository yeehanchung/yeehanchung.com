import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
// import { P, TopicTag, A } from "../elements"
import { Container, Post, Seo } from '../components';

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

export default ({ data }) => {
    const readingTime = data.markdownRemark.fields.readingTime.text;
    const excerpt = data.markdownRemark.frontmatter.excerpt;
    const tag = data.markdownRemark.frontmatter.tag;
    const lastEdited = data.markdownRemark.frontmatter.lastEdited;
    console.log(data);

    return (
        <Container>
            <Seo
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.excerpt}
            />
            <Post>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p style={{ marginBottom: '50px' }}>
                    <Span>{data.markdownRemark.frontmatter.date}</Span>
                    <Span>{readingTime}</Span>
                    <Span>{excerpt}</Span>
                    <Tag>
                        {'#'}
                        {tag}
                    </Tag>
                </p>
                <StyledPostContent
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                />
                <p style={{ marginTop: '70px', marginBottom: '0' }}>
                    Last edited: {lastEdited}
                </p>
                <BackToNotes to={'/tech'}>← Back to notes</BackToNotes>
            </Post>
        </Container>
    );
};

export const pageQuery = graphql`
    {
        markdownRemark(frontmatter: { tag: { eq: "credits" } }) {
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
