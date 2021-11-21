/* --- LIBRARIES --- */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

/* --- UI COMPONENTS --- */
import TopicList from '../topic-list';

export const MiscNotes = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { tag: { eq: "misc" } } }
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
            image: file(relativePath: { eq: "topic-svg/misc.svg" }) {
                publicURL
            }
        }
    `);
    let posts = data.allMarkdownRemark.edges;
	let imageUrl = data.image.publicURL;

    return <TopicList title="Misc" imageUrl={imageUrl} posts={posts} />;
};

export default MiscNotes;
