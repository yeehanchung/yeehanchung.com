import styled from "styled-components"

export const CardWrapper = styled.div`
  /* margin-top: 2rem; */
  grid-row: 2 / span 6;
  display: flex;
  /* by default is left to right */
  /* now is top to bottom */
  flex-direction: column;
  /* align-items: center; */
  /* transition: all 0.5s; */
  /* box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px; */
  padding: ${props =>
    `${props.theme.spacings.small} ${props.theme.spacings.xxLarge}`};
    /* grid-column: 2 / span 6; */
  /* @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props =>
    `${props.theme.spacings.small} ${props.theme.spacings.xxLarge}`};
    grid-column: 2 / span 6;
  } */

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.small} ${props.theme.spacings.small}`};
    /* grid-column: 2 / span 6; */
  }
`
