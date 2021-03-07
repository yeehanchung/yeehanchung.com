// Hook
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { NavWrapper } from "../elements"
// import logoSVG from "../img/logo.svg"

const OfficialWebpage = styled.a`
  /* grid-column: 1 / span 12; */
  grid-row: 1/ 2;
  display: flex;
  /* margin-left: right; */
  align-items: flex-end;
  text-decoration: none;
  margin: 0 2rem;

  &:hover {
    text-decoration: underline;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

const CustomSpan = styled.div`
  /* transition: all 0.3s; */
  @media screen and (min-width: 990px) {
    &:hover {
      transform: scale(1.05);
      grid-column: 2 / span 6;
      // align-self: center;
    }
  }
`

const Ul = styled.ul`
  list-style: none;
  margin-left: auto;
  @media screen and (max-width: 990px) {
    font-size: 10px;
    display: block;
  }
`
// const Li = styled.li`
//   margin: 20px 0 10px 0px;

//   /* @media screen and (max-width: 990px) {
//     font-size: 13px;
//   } */
// `

const MyLogoA = styled(Link)`
  font-family: ${props => props.theme.fonts.main};
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;
  color: black;
`

export const Nav = () => {
  return (
    <NavWrapper>
      <CustomSpan>
        <MyLogoA to="/" target="" rel="noopener noreferrer" alt="logo">
          YeeHan
        </MyLogoA>
      </CustomSpan>
      {/* <Ul>
        <NaElement to={"/blog"}>Blog</NaElement>
        <NavElement to={"/resume"}>Resume</NavElement>
      </Ul> */}
    </NavWrapper>
  )
}

// <img src={data.loqo.publicURL} alt="logo" />
