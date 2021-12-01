/* --- LIBRARIES --- */
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';

/* --- UI COMPONENTS --- */
import TopicListColumn from '../topic-list-column';

const SoftwareEngineeringBlog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                filter: {frontmatter: {tag: {eq: "software-engineering"}}}
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
            image: file(relativePath: {eq: "topic-svg/og_image.jpeg"}) {
                publicURL
            }
        }
    `);
    let posts = data.allMarkdownRemark.edges;
    let imageUrl = data.image.publicURL;

    return (
        <TopicListColumn
            title="Software Engineering"
            imageUrl={imageUrl}
            posts={posts}
        />
    );
};

export default SoftwareEngineeringBlog;
