/* --- LIBRARIES --- */
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';

/* --- UI COMPONENTS --- */
import TopicListColumn from '../topic-list-column';

const CliNotes = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                filter: {frontmatter: {tag: {eq: "cli"}}}
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
            image: file(relativePath: {eq: "topic-svg/cli.svg"}) {
                publicURL
            }
        }
    `);
    let posts = data.allMarkdownRemark.edges;
    let imageUrl = data.image.publicURL;

    return <TopicListColumn title="CLI" imageUrl={imageUrl} posts={posts} />;
};

export default CliNotes;
