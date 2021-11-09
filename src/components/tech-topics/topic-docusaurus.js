/* --- LIBRARIES --- */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

/* --- UI COMPONENTS --- */
import { Topic, TopicTag, UnorderedList } from '../../styled';
import { TopicListing } from './index';

const DocusaurusNotes = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { tag: { eq: "docusaurus" } } }
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
            docusaurus: file(relativePath: { eq: "topic-svg/docusaurus.svg" }) {
                publicURL
            }
        }
    `);
    let newData = data.allMarkdownRemark.edges;
    let docusaurusSVG = data.docusaurus.publicURL;

    return (
        <Topic>
            <TopicTag>
                <span className="inner-tag-emoji">
                    <img
                        className="tag-emoji"
                        src={docusaurusSVG}
                        alt="Docusaurus Logo"
                    />
                </span>
                Docusaurus
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

export default DocusaurusNotes;