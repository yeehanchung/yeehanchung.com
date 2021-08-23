// import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';

/**
 * Post.js holds higher priority in styling.
 * The styling Post.js overrides most of the styling configured here.
 */

// Paragraph
export const P = styled.p`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-size: ${(props) => {
    switch (props.size) {
      case 'medium':
        return '1.125rem';
      case 'xMedium':
        return '0.9rem';
      case 'small':
        return '0.9rem';
      case 'xSmall':
        return '14px';
      case 'xxSmall':
        return '10px';
      default:
        return '1.125rem';
    }
  }};
  line-height: ${(props) => {
    switch (props.lineHeight) {
      case 'medium':
        return '1.8rem';
      case 'small':
        return '1.375rem';
      case 'xSmall':
        return '1.125rem';
      default:
        return '1.5rem';
    }
  }};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : 'none'};
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};
  /* color: gray; */
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'dark4':
        return props.theme.colors.dark4;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      default:
        return props.theme.colors.dark1;
    }
  }};
`;

// a tag
export const A = styled.a`
  font-size: 0.9rem;
  /* text-decoration-thickness: 0.1em; */
  /* text-underline-offset: 1.5px; */
  /* text-decoration: underline; */
  font-weight: 700;
  color: #ff5e62;
  margin: 0 5px;

  &:first-child {
    margin: 0 5px 0 0;
  }

  &:last-child {
    margin: 0 0 0 5px;
  }

  &:hover {
    color: #357ae8;
    text-decoration-thickness: 0.1em;
    text-underline-offset: 1.5px;
    text-decoration: none;
  }
`;

// Header 1
export const H1 = styled.h1`
  font-family: ${(props) => props.theme.H1};
  /* font-weight: bold; */
  font-size: 2.25rem;
  /* font-weight: bold; */
  line-height: 60px;
  color: #495057;
  /* text-shadow: 1px 1px #444950; */
  /* color: gray; */
  /* color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      default:
        return props.theme.colors.dark1;
    }
  }}; */
  /* font-weight: 400; */
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : 0)};

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.4rem;
  line-height: 1.875rem;
  /* color: orange; */
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      default:
        return props.theme.colors.dark1;
    }
  }};
  font-weight: 500;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : 0)};

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 21px;
  }
`;

/**
 * For date and reading time
 */
// export const NavElement = styled((props) => <Link {...props} />)`
//   /* font-family: 'system-ui'; */
//   color: #ff5e62;
//   margin: ${(props) => (props.margin ? props.margin : 0)};
//   padding: ${(props) => (props.padding ? props.padding : 0)};
//   font-size: ${(props) => {
//     switch (props.size) {
//       case 'medium':
//         return '1.125rem';
//       case 'small':
//         return '0.9rem';
//       case 'xSmall':
//         return '0.8rem';
//       default:
//         return '1.125rem';
//     }
//   }};
//   text-decoration: ${(props) =>
//     props.textDecoration ? props.textDecoration : 'none'};

//   font-size: 1.125rem;
//   font-weight: bold;
//   text-decoration: none;
//   margin: 0 2rem;

//   &:hover {
//     color: #357ae8;
//     text-decoration-thickness: 0.1em;
//     text-underline-offset: 1.5px;
//     text-decoration: none;
//   }
// `;
