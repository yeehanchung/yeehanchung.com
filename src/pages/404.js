import React from "react"
import { graphql } from "gatsby"
import { Container, Content } from "../components"
import { CardWrapper, H1, P } from "../elements"

const notFound = ({ data }) => {
  return (
    <Container>
      <Content>
        <P>Error 404</P>
        <P size="small" color="dark4" margin="1rem 0 0 0">
          We could not find what you were looking for
        </P>
      </Content>
    </Container>
  )
}

export default notFound

// export const notFoundQuery = graphql`
//   query NotFoundQuery {
//     imageSharp(fixed: { originalName: { eq: "404-error.jpg" } }) {
//       fixed(width: 1200, height: 480) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// `
