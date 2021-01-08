import React from "react"
import { CardWrapper, P } from "../elements"
import { Button } from "../components"
import styled from "styled-components"

const Row = styled.div`
  flex-direction: row;
  display: flex;
  /* justify-content: space-between; */
  align-self: flex-end;
`

const Span = styled.span`
  padding: 0 1rem 0 0rem;
`

export const ContentCard = ({ date, title, excerpt, slug, readingTime }) => {
  return (
    <CardWrapper>
      <Button href={slug} size="medium">
        {title}
      </Button>
      <P size="xSmall" color="dark2" margin="0 0 18px 0">
        <Span>{date}</Span>
        <Span>{readingTime}</Span>
      </P>
      <P size="xMedium" color="dark4">
        {excerpt}
      </P>
      <Row>
        <Button href={slug} size="small">
          Read more
        </Button>
      </Row>
    </CardWrapper>
  )
}
