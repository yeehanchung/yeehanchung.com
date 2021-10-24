import React from 'react';
import styled from 'styled-components';
import { Button } from './index';

const TopicListingLi = styled.li`
    color: ${(props) => props.theme.colors.font};
    color: var(--font-color-topic-date);
    /* line-height: 20px; */
    margin-bottom: 0.3rem;
    line-height: 0.9rem;
    max-width: 35ch;
`;

const TopicListingP = styled.p`
    margin-top: 2.5px;
    font-size: 0.625rem;
`;

export const TopicListing = ({
    date,
    title,
    excerpt,
    slug,
    readingTime,
    lastEdited,
}) => {
    return (
        <>
            <TopicListingLi key={slug}>
                <Button href={slug} size="small">
                    {title}
                </Button>
                <TopicListingP>
                    {readingTime} - {date} ☕︎{' '}
                    {lastEdited ? `Last edited: ${lastEdited}` : null}
                </TopicListingP>
            </TopicListingLi>
        </>
    );
};
