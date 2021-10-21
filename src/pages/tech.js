import React from 'react';
import styled from 'styled-components';
import { Container, Seo } from '../components';
import {
  CliNotes,
  DocusaurusNotes,
  GitNotes,
  MiscNotes,
  WordPressNotes,
  JavaScriptNotes
} from '../components/tech-topics';
import OG_image from '../img/og_image.jpeg';
import './tech.css';

export const NoteListing = styled.div`
  column-width: 20rem;
  column-gap: 2rem;
  max-width: 120ch;
  margin: 4rem auto;

  @media ${(props) => props.theme.breakpoints.mobile} {
    column-width: 15rem;
  }
`;

export default ({ location }) => {
  return (
    <>
      <Container location={location}>
        <Seo image={OG_image} title={"Yee Han's Dev Blog"} />
        <NoteListing>
          {/* <ApiNotes /> */}
          <CliNotes />
          {/* <CssNotes /> */}
          <DocusaurusNotes />
          {/* <GatsbyNotes /> */}
          <GitNotes />
          <JavaScriptNotes />
          {/* <ReactNotes /> */}
          {/* <ReduxNotes /> */}
          <WordPressNotes />
          <MiscNotes />
        </NoteListing>
      </Container>
    </>
  );
};
