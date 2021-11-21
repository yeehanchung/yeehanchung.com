/* --- LIBRARIES --- */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

/* --- UI COMPONENTS --- */
import TopicList from "../topic-list";

const SoftwareEngineeringBlog = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
				filter: { frontmatter: { tag: { eq: "software-engineering" } } }
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
			softwareEngineering: file(
				relativePath: { eq: "topic-svg/og_image.jpeg" }
			) {
				publicURL
			}
		}
	`);
	let posts = data.allMarkdownRemark.edges;
	let imageUrl = data.softwareEngineering.publicURL;

	return (
		<TopicList
			title="Software Engineering"
			imageUrl={imageUrl}
			posts={posts}
		/>
	);
};

export default SoftwareEngineeringBlog;
