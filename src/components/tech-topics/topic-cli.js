/* --- LIBRARIES --- */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
/* --- UI COMPONENTS --- */
import { Topic, TopicTag, UnorderedList } from "../../styled";
import { TopicListing } from "./index";

export const CliNotes = ({ src }) => {

    console.log(src);
    // src = "cli";

	const data = useStaticQuery(graphql`
		query  {
			allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { tag: { eq: "cli" } } }
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
			cli: file(relativePath: { eq: "topic-svg/cli.svg" }) {
				publicURL
			}
		}
	`);
	let newData = data.allMarkdownRemark.edges;
	let cliSVG = data.cli.publicURL;

	console.log(newData);

	return (
		<Topic>
			<TopicTag>
				<span className="inner-tag-emoji">
					<img
						className="tag-emoji"
						src={cliSVG}
						alt="WordPress Logo"
					/>
				</span>
				CLI
			</TopicTag>
			<UnorderedList>
				{newData.map((data) => {
					// switch (data.node.frontmatter.tag) {
					// 	case "cli":
					// 		return (
					// 			<TopicListing
					// 				key={data.node.frontmatter.slug}
					// 				date={data.node.frontmatter.date}
					// 				title={data.node.frontmatter.title}
					// 				excerpt={data.node.frontmatter.excerpt}
					// 				slug={data.node.frontmatter.slug}
					// 				readingTime={
					// 					data.node.fields.readingTime.text
					// 				}
					// 				lastEdited={
					// 					data.node.frontmatter.lastEdited
					// 				}
					// 			/>
					// 		);
					// }

					return (
						<TopicListing
							key={data.node.frontmatter.slug}
							date={data.node.frontmatter.date}
							title={data.node.frontmatter.title}
							excerpt={data.node.frontmatter.excerpt}
							slug={data.node.frontmatter.slug}
							readingTime={data.node.fields.readingTime.text}
							lastEdited={data.node.frontmatter.lastEdited}
						/>
					);
                    // return;
				})}
			</UnorderedList>
		</Topic>
	);
};

// export const getTechNotes = graphql`
//     query GatsbyQuery()
// `;