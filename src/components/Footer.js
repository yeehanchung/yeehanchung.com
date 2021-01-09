import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialIcons,
  FooterSocialWrapper,
  P,
} from "../elements"
import styled, { css } from "styled-components"

export const InnerIcon = styled.a`
  margin: "2rem 1rem";
  padding: "2rem";
  fill: "white";
`

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <InnerIcon
            href="https://github.com/cyeehan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="GitHub" />
          </InnerIcon>
          <InnerIcon
            href="https://www.linkedin.com/in/cyeehan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin" />
          </InnerIcon>
          <InnerIcon
            href="https://www.facebook.com/chungyhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook" />
          </InnerIcon>
          <InnerIcon
            href="https://www.instagram.com/cyee_han"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="Instagram" />
          </InnerIcon>
        </FooterSocialIcons>
        <P size="xSmall">
          Built with Gatsby by Yee Han{" "}
          <span role="img" aria-label="Copyright">
            &copy;
          </span>{" "}
          {new Date().getFullYear()}
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
