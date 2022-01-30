/* --- NODE MODULES --- */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

/* --- UI COMPONENTS --- */
import { TopicListColumn } from "@components/index";

const JavaScriptNotes = (): React.ReactElement => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                filter: {frontmatter: {tag: {eq: "javascript"}}}
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
            image: file(relativePath: {eq: "topic-svg/javascript.svg"}) {
                publicURL
            }
        }
    `);
   
    return (
        <TopicListColumn queryData={data} />
    );
};

export default JavaScriptNotes;
