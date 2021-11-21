/* --- LIBRARIES --- */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

/* --- UI COMPONENTS --- */
import TopicList from "../topic-list";

const ReinventionBlog = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
				filter: { frontmatter: { tag: { eq: "reinvention" } } }
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
			# SVG by https://creativemarket.com/Becris
			infinity: file(relativePath: { eq: "topic-svg/biography.svg" }) {
				publicURL
			}
		}
	`);
	let posts = data.allMarkdownRemark.edges;
	let imageUrl = data.infinity.publicURL;

	return <TopicList title="Reinvention" imageUrl={imageUrl} posts={posts} />;
};

export default ReinventionBlog;
