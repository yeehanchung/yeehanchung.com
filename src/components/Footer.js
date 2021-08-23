import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {
  FooterSocialIcons,
  FooterSocialWrapper,
  FooterWrapper,
  P
} from '../styled';

export const InnerIcon = styled.a`
  margin: '2rem 1rem';
  padding: '2rem';
`;

export const Footer = () => {
  const { linkedin, github, instagram, site } = useStaticQuery(graphql`
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
      site {
        siteMetadata {
          author
          shortName
          title
          description
          occupation
          url
          image
          social {
            githubUrl
            linkedInUrl
            facebookUrl
            twitterUrl
            instagramUrl
            devUrl
          }
          keywords
        }
      }
    }
  `);
  let data = site.siteMetadata;

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <InnerIcon
            href={data.social.githubUrl}
            target="_blank"
            rel="noopener noreferrer">
            <img src={github.publicURL} alt="GitHub" height="25px" />
          </InnerIcon>
          <InnerIcon
            href={data.social.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer">
            <img src={linkedin.publicURL} alt="LinkedIn" height="25px" />
          </InnerIcon>
          {/* <InnerIcon
            href="https://www.facebook.com/chungyhan/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={data.facebook.publicURL} alt="Facebook" />
          </InnerIcon> */}
          <InnerIcon
            href={data.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer">
            <img src={instagram.publicURL} alt="Instagram" height="25px" />
          </InnerIcon>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          Built by {data.shortName}{' '}
          <span role="img" aria-label="Copyright">
            &copy;
          </span>{' '}
          2020 - {new Date().getFullYear()}. All Rights Reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  );
};
