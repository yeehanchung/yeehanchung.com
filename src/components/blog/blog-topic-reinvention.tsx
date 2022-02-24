/* --- NODE MODULES --- */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

/* --- UI COMPONENTS --- */
import { TopicListColumn } from "@components/index";

const ReinventionBlog = (): React.ReactElement => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                filter: {frontmatter: {tag: {eq: "reinvention"}}}
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
                            isDraft
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
            image: file(relativePath: {eq: "topic-svg/biography.svg"}) {
                publicURL
            }
        }
    `);

    return (
        <TopicListColumn queryData={data} />
    );
};

export default ReinventionBlog;
