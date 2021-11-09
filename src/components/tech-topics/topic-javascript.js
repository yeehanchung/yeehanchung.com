import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Topic, TopicTag, UnorderedList } from '../../styled';
import { TopicListing } from './index';

const JavaScriptNotes = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { tag: { eq: "javascript" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            date(formatString: "MMM DD, YYYY")
                            slug
                            tag
                            title
                            excerpt
                            lastEdited(formatString: "MMM DD, YYYY")
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
            javascript: file(relativePath: { eq: "topic-svg/javascript.svg" }) {
                publicURL
            }
        }
    `);
    let newData = data.allMarkdownRemark.edges;
    let javascriptSVG = data.javascript.publicURL;

    return (
        <Topic>
            <TopicTag>
                <span className="inner-tag-emoji">
                    <img
                        className="tag-emoji"
                        src={javascriptSVG}
                        alt="JavaScript Logo"
                    />
                </span>
                JavaScript
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

export default JavaScriptNotes;
