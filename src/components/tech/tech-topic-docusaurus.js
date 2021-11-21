/* --- MODULES --- */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

/* --- UI COMPONENTS --- */
import TopicListColumn from "../topic-list-column";

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
			image: file(relativePath: { eq: "topic-svg/docusaurus.svg" }) {
				publicURL
			}
		}
	`);
	let posts = data.allMarkdownRemark.edges;
	let imageUrl = data.image.publicURL;

	return <TopicListColumn title="Docusaurus" imageUrl={imageUrl} posts={posts} />;
};

export default DocusaurusNotes;
