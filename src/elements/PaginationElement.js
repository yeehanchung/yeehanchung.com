import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  grid-column: 2 / span 12;
  margin: 5rem 0rem 3rem 0;
  padding: 0 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* grid-row-end: 8; */
  grid-row: span 2/9;

  /*  Pass Boolean data into props */
  a:nth-child(1) {
    color: ${props =>
      props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dakr1};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    /* regular pointer : clickable */
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  /* Is last? */
  a:nth-child(2) {
    color: ${props =>
      props.isLast ? props.theme.colors.dark3 : props.theme.colors.dakr1};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    visibility: ${props => (props.isLast ? "hidden" : "auto")};
    /* regular pointer : clickable */
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }

  /* Media queries */
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 2rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
