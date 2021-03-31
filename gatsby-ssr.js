/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import Theme from './src/themes/theme';

const GlobalStyles = createGlobalStyle`
  * {
    /* box-sizing: border-box;
    margin: 0;
    padding: 0; */
  }

  body {
  }
`;

export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={Theme}>
    {/* <GlobalStyles /> */}
    {element}
  </ThemeProvider>
);
