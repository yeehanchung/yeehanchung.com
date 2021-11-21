/* --- LIBRARIES --- */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

/* --- UI COMPONENTS --- */
import TopicList from "../topic-list";

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
	let posts = data.allMarkdownRemark.edges;
	let imageUrl = data.javascript.publicURL;

	return <TopicList title="JavaScript" imageUrl={imageUrl} posts={posts} />;
};

export default JavaScriptNotes;
