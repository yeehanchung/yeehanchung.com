import styled from 'styled-components';

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 2 / span 6;
  padding: 0;
  text-align: left;
  z-index: 10;

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 0;
    grid-column: 2 / span 6;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0;
  }
`;
