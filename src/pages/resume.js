/* --- LIBRARIES --- */
import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

/* --- UI COMPONENTS --- */
import * as Typography from '../styled/Typography';
import {Container, ResumePost, Seo, Author} from '../components';

/* --- IMAGES --- */
import OG_IMAGE from '../img/og_image.jpeg';


const UpdatedDate = styled.p`
    margin-bottom: 0.8rem;
`;

export default ({data}) => {
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
                <UpdatedDate>
                    <span role="img">⏳</span>&nbsp;{queryData.date}
                </UpdatedDate>
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
