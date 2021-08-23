import styled from 'styled-components';

export const PostWrapper = styled.main`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.main};
  /* grid-column: 4 / span 8; */
  /* grid-row: 1 / span 6; */
  margin: 0px 0 1rem 0;
  padding: 3rem 0;
  z-index: 10;
  max-width: 40rem;
  color: #d2d2d2;
  max-width: 90ch;
  padding: 2rem 0rem 3rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica, Arial,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  /* main: */
  /* 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol', */
  display: block;
  font-size: var(--font-size-base);

  /* --------------- Headers: Start --------------- */
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
    /* line-height: 1.5rem; */
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
  /* --------------- Headers: End --------------- */

  p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.dark2};
    /* display: flex; */
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
    line-height: 1.5; /* 1.8rem */
    text-align: left;
    /* max-width: 36rem; */
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
    margin: 0.5rem 0 1rem 1rem;
    line-height: 1.5rem;
  }

  li {
    font-size: 0.9rem;
    line-height: 1.6rem;
    font-weight: 400;
    margin: 0rem 0 0 0rem;
  }

  li > p {
    margin: 0;
  }

  li > ul {
    margin: 0 0 0 1rem;
  }

  li:first-child {
    margin: 0rem 0 0 0rem;
  }

  li > ol {
    margin-top: 0;
  }
  /* ul,
  ol {
    margin-left: var(--spacing-0);
    margin-right: var(--spacing-0);
    padding: var(--spacing-0);
    margin-bottom: var(--spacing-8);
    list-style-position: outside;
    list-style-image: none;
  }

  ul li,
  ol li {
    padding-left: var(--spacing-0);
    margin-bottom: calc(var(--spacing-8) / 2);
  }

  li > p {
    margin-bottom: calc(var(--spacing-8) / 2);
  }

  li *:last-child {
    margin-bottom: var(--spacing-0);
  }

  li > ul {
    margin-left: var(--spacing-8);
    margin-top: calc(var(--spacing-8) / 2);
  } */

  code {
    /* font-family: ${(props) =>
      props.theme.fonts
        .code};
    font-size: 1rem;
    line-height: 1.875rem;
    color: ${(
      props,
    ) => props.theme.colors.light1};
    background-color: ${(props) =>
      props.theme.colors.dark3};
    padding: 0 0.3rem; */
    font-family: ${(props) => props.theme.fonts.code};
    /* font-size: 0.8rem; */
    /* line-height: 1.875rem; */
    color: ${(props) => props.theme.colors.codefont};
    /* background-color: ${(props) => props.theme.colors.codebg}; */
    /* padding: 0.05em 0.4em 0.05em; */
    /* border-radius: 5px; */

    /* font-size: 85%; */
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

  /* span {
    padding: 0 1rem 0 0rem;
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 400;

    color: ${(
    props,
  ) => props.theme.colors.code};
  } */

  /* img {
    margin: 15px 0 0 15px;
    width: 20%;
    height: auto;
  } */
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

  /* For resume page only - to display pictures in appropriate size and position */
  span[class='gatsby-resp-image-wrapper'] {
    /* float: left;
    width: 250px;
    height: auto; */
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

  /* @media ${(props) => props.theme.breakpoints.mobile} {
    padding: ${(
    props,
  ) => `${props.theme.spacings.xLarge} ${props.theme.spacings.small}`};
  } */
`;
