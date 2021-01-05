import styled from 'styled-components'

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  /* display: flex; */
  /* justify-content: center; */
  margin-top: 40px;

  & img {
    /* height: 100px; */
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`