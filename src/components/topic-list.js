/* --- MODULES --- */
import React from "react";

/* --- UI COMPONENTS --- */
import { Topic, TopicTag, UnorderedList } from "../styled";
import { TopicListing } from "./tech-topics";

const TopicList = ({ title, imageUrl, posts }) => {
	return (
		<>
			<Topic>
				<TopicTag>
					<img
						className="tag-emoji"
						src={imageUrl}
						alt={`${title} Logo`}
					/>
					{title}
				</TopicTag>
				<UnorderedList>
					{posts.map((post) => {
						return (
							<TopicListing
								key={post.node.frontmatter.slug}
								date={post.node.frontmatter.date}
								title={post.node.frontmatter.title}
								excerpt={post.node.frontmatter.excerpt}
								slug={post.node.frontmatter.slug}
								readingTime={post.node.fields.readingTime.text}
								lastEdited={post.node.frontmatter.lastEdited}
							/>
						);
					})}
				</UnorderedList>
			</Topic>
		</>
	);
};

export default TopicList;
