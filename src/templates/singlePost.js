/* --- LIBRARIES --- */
import {graphql, Link} from 'gatsby';
import React from 'react';
import styled from 'styled-components';

/* --- UI COMPONENTS --- */
import {Container, Post, Seo} from '../components';

const Span = styled.span`
    padding: 0 1rem 0 0rem;
`;

const Tag = styled.span`
    color: #ff5e62;
    padding: 0 1rem 0 0rem;
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
    color: ${(props) => props.theme.colors.link};
    max-width: 90ch;
    margin: 3.5rem auto 2rem;
    display: block;
    text-decoration: none;
`;

const singlePost = ({data}) => {
    const readingTime = data.markdownRemark.fields.readingTime.text;
    const excerpt = data.markdownRemark.frontmatter.excerpt;
    const tag = data.markdownRemark.frontmatter.tag;
    const lastEdited = data.markdownRemark.frontmatter.lastEdited;

    return (
        <Container>
            <Seo
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.excerpt}
            />
            <Post>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p style={{marginBottom: '50px'}}>
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
                {lastEdited ? (
                    <p style={{marginTop: '70px', marginBottom: '0'}}>
                        Last edited: {lastEdited}
                    </p>
                ) : (
                    ''
                )}
                <BackToNotes to={'/tech'}>← Back to notes</BackToNotes>
            </Post>
        </Container>
    );
};

export default singlePost;

export const pageQuery = graphql`
    query SinglePostQuery($id: String!) {
        markdownRemark(id: {eq: $id}) {
            fields {
                readingTime {
                    text
                }
            }
            frontmatter {
                # author
                date(formatString: "MMM DD, YYYY")
                # description
                slug
                tag
                title
                keywords
                excerpt
                lastEdited(formatString: "MMM DD, YYYY")
            }
            html
        }
    }
`;
