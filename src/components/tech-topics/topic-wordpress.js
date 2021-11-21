/* --- MODULES --- */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

/* --- UI COMPONENTS --- */
import TopicList from "../topic-list";

export const WordPressNotes = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
				filter: { frontmatter: { tag: { eq: "wordpress" } } }
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
			image: file(relativePath: { eq: "topic-svg/wordpress.svg" }) {
				publicURL
			}
		}
	`);
	let posts = data.allMarkdownRemark.edges;
	let imageUrl = data.image.publicURL;

	return <TopicList title="WordPress" imageUrl={imageUrl} posts={posts} />;
};

export default WordPressNotes;
