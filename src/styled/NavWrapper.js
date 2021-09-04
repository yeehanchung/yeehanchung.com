import styled from 'styled-components';

export const NavWrapper = styled.nav`
  /* max-width: 40rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0rem 0;
  margin: 0 auto;
  max-width: 70rem;
  text-align: center;

  & img {
    /* height: 100px; */
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 3rem 0rem 0 0rem;
    margin-left: 0;
    margin-right: auto;
    /* Grid */
    display: grid;
    justify-items: center;
    align-items: center;
    align-content: center;
    grid-row: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: 25px 100px 25px;
  }
`;
