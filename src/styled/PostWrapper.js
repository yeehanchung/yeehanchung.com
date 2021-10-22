import styled from 'styled-components';

export const PostWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 0;
  padding: 3rem 0;
  z-index: 10;
  max-width: 40rem;
  color: #d2d2d2;
  padding: 2rem 0 3rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica, Arial,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  display: block;
  font-size: var(--font-size-base);

  /* --------------- Headers: start --------------- */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.dark1};
  }

  h1 {
    font-family: ${(props) => props.theme.H1};
    font-weight: 700;
    line-height: 60px;
    color: #495057;
    text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
    margin: ${(props) => (props.margin ? props.margin : 0)};

    @media ${(props) => props.theme.breakpoints.mobile} {
      font-size: 1.5rem;
    }

    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 700;
    text-align: left;
    margin: 4rem 0 2rem 0;
    max-width: 30ch;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.75rem;
    margin: 2rem 0 1rem 0;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin: 2rem 0 1rem 0;
  }

  h4 {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }

  h6 {
    color: hsl(227, 2%, 26%);
    font-size: 0.9rem;
    line-height: 1.125rem;
    text-align: center;
    text-decoration: none;
  }
  /* --------------- Headers: end --------------- */

  p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.dark2};
    margin: 1rem 0;
  }

  details {
    margin: 1rem 0;
  }

  summary {
    font-size: 0.9rem;
    color: #357ae8;

    &::marker {
      color: black;
    }
  }

  a {
    color: ${(props) => props.theme.colors.main1};
    text-decoration: none;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    font-style: italic;
    border-left: 4px solid #ff5e62;
    font-size: 0.85rem;
    line-height: 1.5;
    text-align: left;
    margin: 1rem 0;
    padding: 1rem;
    background: #ffffff;
  }

  ul {
    list-style-type: default;
  }

  ul,
  ol {
    color: ${(props) => props.theme.colors.dark2};
    margin: 0.5rem 0 1rem 1.5rem;
    line-height: 1.5rem;
  }

  li {
    font-size: 0.9rem;
    line-height: 1.6rem;
    font-weight: 400;
    margin: 0 0 0 0;
  }

  li > p {
    margin: 0;
  }

  li > ul {
    margin: 0 0 0 1rem;
  }

  li:first-child {
    margin: 0 0 0 0;
  }

  /* li:nth-child(10) {
    margin-left: 9px;
  } */

  li > ol {
    margin-top: 0;
  }

  code {
    font-family: ${(props) => props.theme.fonts.code};
    color: ${(props) => props.theme.colors.codefont};
    line-height: 1.7;
    background: #efedf0;
    padding: 0.25rem;
    border-radius: 0.375rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${(props) => props.theme.colors.dark1};
    opacity: 0.2;
    margin: 2rem 0;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid ${(props) => props.theme.colors.dark3};
  }

  th,
  td {
    text-align: left;
  }

  td:first-child {
    font-size: 1.3rem;
    width: 10%;
    position: absolute;
  }

  td:nth-last-child(1) {
    padding: ${(props) =>
      `${props.theme.spacings.small} 0 0 ${props.theme.spacings.xLarge}`};
    margin-left: 10px;

    /* Tablet */
    @media ${(props) => props.theme.breakpoints.tablet} {
      padding: ${(props) =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.xLarge}`};
    }

    /* Mobile */
    @media ${(props) => props.theme.breakpoints.mobile} {
      padding: ${(props) =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.x2Large}`};
    }
  }

  figcaption {
    text-align: center;
    margin-top: 0.5rem;
    color: hsl(227, 2%, 26%);
    font-style: italic;
  }

  img {
    margin: 5rem 0;
    border-radius: 2px;
  }

  span[class='gatsby-resp-image-wrapper']:last-child {
    margin-bottom: 1.25rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
      margin-bottom: 1.25rem;
    }

    @media ${(props) => props.theme.breakpoints.mobile} {
      margin-bottom: 1.25rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;
