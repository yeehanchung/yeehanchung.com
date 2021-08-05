import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 0rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-row: span 2/11;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;

  p {
    text-align: center;
    flex: 0 0 100%;
  }
`;

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin: 2rem 0 2rem 0;
  transition: all 0.5s;

  img {
    height: 30px;
    margin: 10px 0;
    padding: 0 3rem;
    transition: filter 0.3s;
  }

  img:hover,
  img:focus {
    transition: all 0.3s;
    filter: brightness(40%);
  }
`;
