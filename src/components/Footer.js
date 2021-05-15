import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {
  FooterSocialIcons,
  FooterSocialWrapper,
  FooterWrapper,
  P,
} from '../elements';

export const InnerIcon = styled.a`
  margin: '2rem 1rem';
  padding: '2rem';
`;

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      linkedin: file(relativePath: {eq: "linkedin.svg"}) {
        publicURL
      }
      github: file(relativePath: {eq: "github.svg"}) {
        publicURL
      }
      facebook: file(relativePath: {eq: "facebook.svg"}) {
        publicURL
      }
      instagram: file(relativePath: {eq: "instagram.svg"}) {
        publicURL
      }
    }
  `);

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <InnerIcon
            href="https://github.com/cyeehan"
            target="_blank"
            rel="noopener noreferrer">
            <img src={data.github.publicURL} alt="GitHub" />
          </InnerIcon>
          <InnerIcon
            href="https://www.linkedin.com/in/cyeehan/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={data.linkedin.publicURL} alt="Linkedin" />
          </InnerIcon>
          {/* <InnerIcon
            href="https://www.facebook.com/chungyhan/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={data.facebook.publicURL} alt="Facebook" />
          </InnerIcon> */}
          <InnerIcon
            href="https://www.instagram.com/cyeehannn/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={data.instagram.publicURL} alt="Instagram" />
          </InnerIcon>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          Yee Han{' '}
          <span role="img" aria-label="Copyright">
            &copy;
          </span>{' '}
          2020 - {new Date().getFullYear()}. All Rights Reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  );
};
