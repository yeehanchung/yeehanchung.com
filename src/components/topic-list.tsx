/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";

/* --- UI COMPONENTS --- */
import { Button } from "./button";

/* --- TYPES --- */
interface Props {
    date: string;
    title: string;
    excerpt: string;
    slug: string;
    readingTime: string;
    lastEdited: string;
    isDraft: boolean;
}

const TopicListingLi = styled.li`
    color: ${(props) => props.theme.colors.font};
    color: var(--font-color-topic-date);
    margin-bottom: 0.3rem;
    line-height: 0.9rem;
    max-width: 35ch;
`;

const TopicListingP = styled.p`
    margin-top: 2.5px;
    font-size: 0.625rem;
`;

const TopicList = ({
    date,
    title,
    excerpt,
    slug,
    readingTime,
    lastEdited,
    isDraft
}: Props) => {

    const lastEditedData = lastEdited ? `Last edited: ${lastEdited}` : null;

    return (
        <>
            {!isDraft && (
                <TopicListingLi key={slug}>
                    <Button href={slug} size="small">
                        {title}
                    </Button>
                    <TopicListingP>
                        {readingTime} - {date} ☕︎{" "}
                        {lastEditedData}
                    </TopicListingP>
                </TopicListingLi>
            )}
        </>
    );
};

export default TopicList;
