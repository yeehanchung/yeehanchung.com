import styled from "styled-components"

export const ContentWrapper = styled.main`
  text-align: left;
  grid-column: 4 / span 8;
  grid-row: 2 / span 6;
  /* background-color: ${props => props.theme.colors.light1}; */
  z-index: 10;

  padding: 0;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0;
    grid-column: 2 / span 6;
  }
  /* Modify this to adjust x y padding for all blog  */
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
  }
`
