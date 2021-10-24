import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Topic, TopicTag, UnorderedList } from '../../styled';
import { TopicListing } from './index';

export const NoteListing = styled.div`
    margin-top: 4rem;
    margin-bottom: 6rem;
    padding: 1rem;
    column-width: 25rem;
    column-gap: 2rem;
`;

export const ReinventionBlog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { tag: { eq: "reinvention" } } }
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
            # SVG by https://creativemarket.com/Becris
            infinity: file(relativePath: { eq: "topic-svg/biography.svg" }) {
                publicURL
            }
        }
    `);
    let newData = data.allMarkdownRemark.edges;
    let infinitySVG = data.infinity.publicURL;

    return (
        <Topic>
            <TopicTag>
                <span className="inner-tag-emoji">
                    <img
                        className="tag-emoji"
                        src={infinitySVG}
                        alt="Reinvention Logo"
                        // height="2rem"
                        // width="2rem"
                    />
                </span>
                Reinvention
            </TopicTag>
            <UnorderedList>
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
            </UnorderedList>
        </Topic>
    );
};
