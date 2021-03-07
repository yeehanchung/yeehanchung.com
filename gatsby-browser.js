/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import './language-tabs.css';
import Theme from './src/themes/theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    height: 100%;
    /* background-color: ${(props) => props.theme.colors.light1}; */
    background-color: #ffffff;
    background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCA0MCw0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDIwNSkgIj48cmVjdCBpZD0icGF0dGVybi1iYWNrZ3JvdW5kIiB3aWR0aD0iNDAwJSIgaGVpZ2h0PSI0MDAlIiBmaWxsPSJyZ2JhKDI1NSwgMjUwLCAyNDAsMSkiPjwvcmVjdD4gPHBhdGggZmlsbD0icmdiYSgyNTUsIDI1MCwgMjQwLDEpIiBkPSIKICAgICAgICAgICAgICAgIE0tMjAgMzEgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgdi0yIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIHoKICAgICAgICAgICAgICAgIE0tMjAgLTkgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgdi0yIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIHoKICAgICAgICAgICAgICAgIE0tMjAgNzEgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgdi0yIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIHoKICAgICAgICAgICAgICAgICI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMjM1LCAyNDgsIDI1NSwxKSIgZD0iCiAgICAgICAgICAgICAgICBNLTYwIDMwLjUgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgbDIwIC0yMCBsMjAgMjAgdi0xIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIGwtMjAgLTIwIGwtMjAgMjAgegogICAgICAgICAgICAgICAgTS02MCAtOS41IGwyMCAtMjAgbDIwIDIwIGwyMCAtMjAgbDIwIDIwIGwyMCAtMjAgbDIwIDIwIGwyMCAtMjAgbDIwIDIwIHYtMSBsLTIwIC0yMCBsLTIwIDIwIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIHoKICAgICAgICAgICAgICAgIE0tNjAgNzAuNSBsMjAgLTIwIGwyMCAyMCBsMjAgLTIwIGwyMCAyMCBsMjAgLTIwIGwyMCAyMCBsMjAgLTIwIGwyMCAyMCB2LTEgbC0yMCAtMjAgbC0yMCAyMCBsLTIwIC0yMCBsLTIwIDIwIGwtMjAgLTIwIGwtMjAgMjAgbC0yMCAtMjAgbC0yMCAyMCB6CiAgICAgICAgICAgICAgICAiPjwvcGF0aD48L3BhdHRlcm4+ICA8L2RlZnM+IDxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiPjwvcmVjdD48L3N2Zz4=");
    background-attachment: fixed;

  }
`;

export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
