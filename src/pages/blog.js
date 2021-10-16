import React from 'react';
import styled from 'styled-components';
import { Container, Seo } from '../components';
import { ReinventionBlog } from '../components/blog-topics';
import OG_image from '../img/og_image.jpeg';
import './blog.css';

export const NoteListing = styled.div`
  margin-top: 4rem;
  margin-bottom: 3rem;
  /* padding: 1rem; */
  column-width: 20rem;
  column-gap: 2rem;
  margin-top: 4rem;
  max-width: 120ch;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.mobile} {
    column-width: 15rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    column-width: 15rem;
  }
`;

export const Topic = styled.div`
  break-inside: avoid;
`;

export const H2Tag = styled.h2`
  border-bottom: 0.5px solid #222;
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5em;
  padding-bottom: 0.3em;
  line-height: 1.4;
  margin-left: 0;
  margin-right: 0;
  margin-top: 1.6rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  border-radius: var(--border-radius, 2px);
`;

export default ({ location }) => {
  return (
    <>
      <Container location={location}>
        <Seo image={OG_image} title={"Yee Han's Personal Blog"} />
        <NoteListing>
          <ReinventionBlog />
        </NoteListing>
      </Container>
    </>
  );
};
