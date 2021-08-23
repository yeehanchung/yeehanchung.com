/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
// { GlobalStyles }
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import './language-tabs.css';
import './src/styles/global.css';
import './src/styles/main.module.css';
// Prism
import { PrismStyles } from './src/styles/PrismStyles';
import Theme from './src/themes/theme';

const GlobalStyles = createGlobalStyle`
  /* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } */

  ${PrismStyles}
`;

// const components = {
//   // table: Table,
//   pre: (preProps) => {
//     const props = preToCodeBlock(preProps);
//     // if there's a codeString and some props, we passed the test
//     if (props) {
//       return <Code {...props} />;
//     }
//     return <pre {...preProps} />;
//   },
//   wrapper: ({ children }) => <>{children}</>,
//   VisitorBadge: ({ src, alt }) => <VisitorBadge src={src} alt={alt} />,
// };

export const wrapRootElement = ({ element }) => (
  // <MDXProvider components={components}>
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
  // </MDXProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    {/* <GlobalStyles /> */}
    {element}
  </>
);
