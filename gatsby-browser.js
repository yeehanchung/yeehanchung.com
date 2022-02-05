/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

/* --- NODE MODULES --- */
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

/* --- STYLES --- */
import "./src/styles/global.css";
import "./src/styles/main.module.css";
import { PrismStyles } from "./src/styles/PrismStyles";
import Theme from "./src/themes/theme";

const GlobalStyles = createGlobalStyle`
  ${PrismStyles}
`;

export const wrapRootElement = ({ element }) => (
  
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
);
