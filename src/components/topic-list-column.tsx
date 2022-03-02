/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";

/* --- UI COMPONENTS --- */
import { TopicList } from "@components/index";
import {
    Topic,
    TopicTag,
    UnorderedList
} from "@design-system/index";

/* --- UTIS --- */
import { capitalizeFirstLetter } from "@utils/index";

/* --- STYLED COMPONENTS --- */
const Img = styled.img`
    height: 1.35rem;
    padding: 0 0.6rem 0.15rem 0;
    margin: 0px;
`;

/* --- TYPES --- */
export interface I_Data {
    allMarkdownRemark: {
        edges: {
            node: {
                frontmatter: {
                    date: string;
                    slug: string;
                    tag: string;
                    title: string;
                    excerpt: string;
                    lastEdited: string;
                    isDraft: boolean;
                }
                id: string;
                fields: {
                    readingTime: {
                        text: string;
                    }
                }
            }
        };
    };
    image: {
        publicURL: string
    }
}

export interface Props {
    node: {
        frontmatter: {
            date: string;
            slug: string;
            tag: string;
            title: string;
            excerpt: string;
            lastEdited: string;
            isDraft: boolean;
        }
        id: string;
        fields: {
            readingTime: {
                text: string;
            }
        }
    }
}

const TopicListColumn = ( { queryData }: { queryData: I_Data }) => {

    const posts: Props = queryData.allMarkdownRemark.edges;
    const imageUrl = queryData.image.publicURL || "";

    let firstPostOfEachTopic;
    if (Array.isArray(posts)) {
        firstPostOfEachTopic = posts.filter((post: Props) => post)[0];
    }

    let title = "";
    title = capitalizeFirstLetter(firstPostOfEachTopic.node.frontmatter.tag);

    /* REMOVE FIRST DASH */
    title = title.split("-").join(" ");

    return (
        <Topic>

            <TopicTag>
                <Img src={imageUrl} alt={`${title}`} />
                {title}
            </TopicTag>

            <UnorderedList>
                {Array.isArray(posts) && (
                    posts.map((post: Props) => {

                        return (
                            <TopicList
                                key={post.node.frontmatter.slug}
                                date={post.node.frontmatter.date}
                                title={post.node.frontmatter.title}
                                excerpt={post.node.frontmatter.excerpt}
                                slug={post.node.frontmatter.slug}
                                readingTime={post.node.fields.readingTime.text}
                                lastEdited={post.node.frontmatter.lastEdited}
                                isDraft={post.node.frontmatter.isDraft}
                            />
                        );
                    })
                )}
            </UnorderedList>

        </Topic>
    );
};

export default TopicListColumn;
