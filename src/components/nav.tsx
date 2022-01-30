
/* --- NODE MODULES --- */
import React from "react";
import {
    graphql, 
    Link, 
    useStaticQuery 
} from "gatsby";
import styled from "styled-components";

/* --- UI COMPONENTS --- */
import { NavWrapper } from "@design-system/index";

/* --- STYLED COMPONENTS --- */
const NavElement = styled((props) => <Link {...props} />)`
    color: ${(props) => props.theme.colors.link};
    text-decoration: ${(props) =>
        props.textDecoration ? props.textDecoration : "none"};
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    display: flex;

    &:hover {
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

const HomeImgWrapper = styled.div`
    margin: 0 1rem;
`;

const HomeImg = styled.img`
    width: 25px;
    height: 25px;
    display: flex;
`;

const Nav = (): React.ReactElement => {

    const data = useStaticQuery(graphql`
        query {
            cli: file(relativePath: {eq: "topic-svg/house.svg"}) {
                publicURL
            }
        }
    `);

    const cliSVG = data.cli.publicURL;

    return (
        <NavWrapper>
            <NavElement to={"/"}>
                <HomeImgWrapper>
                    <HomeImg alt="Home" src={cliSVG} />
                </HomeImgWrapper>
            </NavElement>
            <NavElement to={"/tech"}>Tech</NavElement>
            <NavElement to={"/blog"}>Blog</NavElement>
            <NavElement to={"/resume"}>Resume</NavElement>
            <NavElement to={"/credits"}>Credits</NavElement>
            {/* <NavElement to={"/life-goals"}>Life Goals</NavElement> */}
        </NavWrapper>
    );
};

export default Nav;
