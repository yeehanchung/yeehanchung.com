/* --- NODE MODULES --- */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

/* --- UI COMPONENTS --- */
import { TopicListColumn } from "@components/index";

const SoftwareEngineeringBlog = (): React.ReactElement => {

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

    return (
        <TopicListColumn queryData={data} />
    );
};

export default SoftwareEngineeringBlog;
