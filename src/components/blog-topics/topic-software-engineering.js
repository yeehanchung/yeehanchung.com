import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Topic, TopicTag } from '../../styled';
import { TopicListing } from './index';

export const Ul = styled.ul`
    list-style: none;
    margin: 0;
    /* padding: 1rem; */
    border-radius: var(--border-radius, 2px);
`;

export const NoteListing = styled.div`
    margin-top: 4rem;
    margin-bottom: 6rem;
    padding: 1rem;
    column-width: 25rem;
    column-gap: 2rem;
`;

export const SoftwareEngineeringBlog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { tag: { eq: "software-engineering" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            date(formatString: "MMM DD, YYYY")
                            slug
                            tag
                            title
                            lastEdited(formatString: "MMM DD, YYYY")
                            excerpt
                        }
                        id
                        fields {
                            readingTime {
                                text
                            }
                        }
                    }
                }
            }
            softwareEngineering: file(
                relativePath: { eq: "topic-svg/og_image.jpeg" }
            ) {
                publicURL
            }
        }
    `);
    let newData = data.allMarkdownRemark.edges;
    let softwareEngineeringSVG = data.softwareEngineering.publicURL;

    return (
        <Topic>
            <TopicTag>
                <span className="inner-tag-emoji">
                    <img
                        className="tag-emoji"
                        src={softwareEngineeringSVG}
                        alt="Software Engineering Logo"
                    />
                </span>
                Software Engineering
            </TopicTag>
            <Ul>
                {newData.map((data) => {
                    return (
                        <TopicListing
                            key={data.node.frontmatter.slug}
                            date={data.node.frontmatter.date}
                            title={data.node.frontmatter.title}
                            excerpt={data.node.frontmatter.excerpt}
                            slug={data.node.frontmatter.slug}
                            readingTime={data.node.fields.readingTime.text}
                            lastEdited={data.node.frontmatter.lastEdited}
                        />
                    );
                })}
            </Ul>
        </Topic>
    );
};
