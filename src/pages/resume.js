/* --- LIBRARIES --- */
import { graphql } from 'gatsby';
import React from 'react';

/* --- UI COMPONENTS --- */
import * as Typography from '../styled/Typography';
import { Author } from '../components/Author.js';
import { Container, ResumePost, Seo } from '../components';

/* --- IMAGES --- */
import OG_IMAGE from '../img/og_image.jpeg';

const Resume = ({ data }) => {
    let queryData = data.markdownRemark.frontmatter;

    return (
        <Container>
            <Seo
                image={OG_IMAGE}
                title={queryData.title}
                author={queryData.author}
                keywords={queryData.keywords}
            />
            <ResumePost>
                <Author />
                <Typography.H2>{queryData.description}</Typography.H2>
                <p style={{ marginBottom: '0.8rem' }}>
                    <span role="img">⏳</span> {queryData.date}
                </p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                />
            </ResumePost>
        </Container>
    );
};

export const pageQuery = graphql`
    {
        markdownRemark(frontmatter: { slug: { eq: "resume" } }) {
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

export default Resume;