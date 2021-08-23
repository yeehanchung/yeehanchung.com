import React from 'react';
import { graphql } from 'gatsby';
import {
  Container,
  Content,
  ContentCard,
  Pagination,
  Post,
  Seo,
  NoteTopic,
  WordPressNotes,
  ReduxNotes,
  CliNotes,
  CssNotes,
  DocusaurusNotes,
  GatsbyNotes,
  JavascriptNotes,
  ApiNotes,
  MiscNotes,
} from '../components';
// import { H1, P, NoteWrapper } from "../styled"
import styled from 'styled-components';
// import myPhoto from "../img/yeehanchung.jpeg"
// Read the values they come in from gatsby-node.js
// data = data from graphql query
// import '../fonts/Dosis-Medium.ttf';

export const NoteListing = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;
  padding: 1rem;
  column-width: 18rem;
  column-gap: 2rem;
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

export const Postt = styled.div`
  display: flex;
`;

const allPosts = () => {
  return (
    <Container>
      <Seo title="Yee Han | Dev Blog" />
      <NoteListing>
        <ApiNotes />
        <WordPressNotes />
        <ReduxNotes />
        <CliNotes />
        <CssNotes />
        <DocusaurusNotes />
        <GatsbyNotes />
        <JavascriptNotes />
        <MiscNotes />
      </NoteListing>
    </Container>
  );
};

export default allPosts;
