import React from "react"
import { CardWrapper, P, H2, H1, P6 } from "../elements"
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
      <P6 size="xSmall" color="dark2">
        <Span>{date}</Span>
        <Span>{readingTime}</Span>
      </P6>
      <P size="small" color="dark4" margin="1rem 0 0 0">
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
