import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { NavWrapper } from '../styled';
// import logoSVG from "../img/logo.svg"

// const OfficialWebpage = styled.a`
//   grid-row: 1/ 2;
//   display: flex;
//   align-items: flex-end;
//   text-decoration: none;
//   margin: 0 2rem;

//   &:hover {
//     text-decoration: underline;
//   }
//   @media ${(props) => props.theme.breakpoints.tablet} {
//     grid-column: 2 / span 6;
//   }
// `;

// const CustomSpan = styled.div`
//   /* transition: all 0.3s; */
//   @media screen and (min-width: 990px) {
//     /* &:hover {
//     } */
//   }
// `;

// const Ul = styled.ul`
//   margin-left: auto;
//   @media screen and (max-width: 990px) {
//     font-size: 10px;
//     display: block;
//   }
// `;
// const Li = styled.li`
//   margin: 20px 0 10px 0px;

//   /* @media screen and (max-width: 990px) {
//     font-size: 13px;
//   } */
// `

// const MyLogoA = styled(Link)`
//   font-weight: bold;
//   text-decoration: none;
//   font-size: 20px;
//   color: black;
// `;

export const NavElement = styled((props) => <Link {...props} />)`
  color: ${(props) => props.theme.colors.link};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : 'none'};
  /* float: right; */
  /* font-size: 0.9rem;
  font-weight: 500; */
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;

  display: flex;

  /* margin: 0 2rem; */
  &:hover {
    /* color: #357ae8; */
    text-decoration: none;
    background-image: linear-gradient(
      to right,
      hsl(180, 100%, 70%),
      hsl(64, 57%, 82%),
      hsl(0, 100%, 90%)
    );

    -webkit-background-clip: text;
    color: transparent;
    color: #0a192f;
  }
  margin: 0 0.75rem;
`;

export const HomeIcon = styled.div`
  margin: 0 1rem;
`;

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      cli: file(relativePath: { eq: "topic-svg/house.svg" }) {
        publicURL
      }
    }
  `);
  // let newData = data.allMdx.edges;
  let cliSVG = data.cli.publicURL;

  return (
    <NavWrapper>
      {/* <h1 className="my-h1">Yee Han</h1> */}
      <NavElement to={'/'}>
        <HomeIcon>
          <img
            src={cliSVG}
            alt="Home icon"
            width="25px"
            height="25px"
            style={{ display: 'flex' }}
          />
        </HomeIcon>
      </NavElement>
      <NavElement to={'/tech'}>Tech</NavElement>
      <NavElement to={'/blog'}>Blog</NavElement>
      <NavElement to={'/resume'}>Resume</NavElement>
      <NavElement to={'/credits'}>Credits</NavElement>
      {/* 3 levels
       */}
    </NavWrapper>
  );
};

// <img src={data.loqo.publicURL} alt="logo" />
