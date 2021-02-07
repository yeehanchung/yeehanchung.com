import styled from "styled-components"

export const PostWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 2 / span 6;
  background-color: ${props => props.theme.colors.light1};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.small}`};
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
  z-index: 10;
  /* border-radius: 50px; */
  margin: 0px 0 60px 0;
  font-family: ${props => props.theme.fonts.main};
  display: flex;
  /* by default is left to right */
  /* now is top to bottom */
  flex-direction: column;
  /* To style post elements */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.dark1};
  }
  /* h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  } */
  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
    text-align: center;

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 1.8rem;
    }
  }
  h2 {
    font-size: 1.4rem;
    line-height: 1.75rem;
    font-weight: bold;
    margin: 4rem 0 1rem 0;
  }
  h3 {
    font-size: 1.1rem;
    line-height: 2rem;
    font-weight: bold;
  }
  h4 {
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 400;
    font-style: italic;
  }
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    /* font-weight: 700; */
  }
  h6 {
    font-size: 0.9rem;
    line-height: 1.125rem;
    /* font-weight: 400; */
    text-decoration: none;
    color: hsl(227, 2%, 26%);
    text-align: center;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${props => props.theme.colors.dark2};
  }
  a {
    color: ${props => props.theme.colors.main1};
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
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }
  ul,
  ol {
    color: ${props => props.theme.colors.dark2};
    margin: 1rem 0 1rem 2rem;
  }
  li {
    font-size: 0.9rem;
    line-height: 1.3rem;
    font-weight: 400;
    margin: 0.35rem 0 0 0rem;
  }
  code {
    font-family: ${props => props.theme.fonts.code};
    font-size: 1rem;
    line-height: 1.875rem;
    color: ${props => props.theme.colors.light1};
    background-color: ${props => props.theme.colors.dark3};
    padding: 0 0.3rem;
  }
  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.dark1};
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
    /* border: 1px solid ${props => props.theme.colors.dark3}; */
  }

  th,
  td {
    text-align: left;
    /* padding: 0.5rem; */
    /* padding-left: 1rem; */
  }
  td:first-child {
    font-size: 1.3rem;
    width: 10%;
    position: absolute;
  }
  td:nth-last-child(1) {
    padding: ${props =>
      `${props.theme.spacings.small} 0 0 ${props.theme.spacings.xLarge}`};
    margin-left: 10px;
    @media ${props => props.theme.breakpoints.tablet} {
      padding: ${props =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.xLarge}`};
    }

    @media ${props => props.theme.breakpoints.mobile} {
      padding: ${props =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.x2Large}`};
    }
  }

  /* img {
    margin: 15px 0 0 15px;
    width: 70%;
    height: auto;
  } */

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.xLarge} ${props.theme.spacings.small}`};
  }
`

export const DateLi = styled.li`
  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props =>
      `${props.theme.spacings.xLarge} ${props.theme.spacings.small}`};
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.xLarge} ${props.theme.spacings.small}`};
  }
`
