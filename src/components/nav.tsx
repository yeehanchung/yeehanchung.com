
/* --- NODE MODULES --- */
import React from "react";
import {
    graphql, 
    Link, 
    useStaticQuery 
} from "gatsby";
import styled from "styled-components";

/* --- UI COMPONENTS --- */
import { Colors } from "@design-system/colors";
import { NavWrapper } from "@design-system/index";

/* --- STYLED COMPONENTS --- */
const NavElement = styled((props) => <Link {...props} />)`
    display: flex;
    color: ${(props) => props.active? 
        `${Colors.sunsetTint}` : props.theme.colors.link };
    text-decoration: ${(props) =>
        props.textDecoration ? props.textDecoration : "none"};
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    margin: 0 0.75rem;

    &:hover {
        color: ${Colors.sunsetTint};
    }
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
    const activeUrl = getActiveUrl();

    return (
        <NavWrapper>
            <NavElement to={"/"}>
                <HomeImgWrapper>
                    <HomeImg alt="Home" src={cliSVG} />
                </HomeImgWrapper>
            </NavElement>

            {urls.map(url => {
                    
                const isUrlActive = activeUrl.redirectUrl === url.redirectUrl;
                const active = isUrlActive? "active" : "";

                return (
                    <NavElement 
                        key={url.title} 
                        to={url.redirectUrl} 
                        active={active}
                    >
                        {url.title}
                    </NavElement>
                );
            })}
        </NavWrapper>
    );
};

function getActiveUrl() {
    const currentUrl = location.pathname;
    const matchingUrl = urls.filter(url => {

        if (currentUrl.indexOf(url.redirectUrl) === 0) {
            return true;
        }
        return false;
    });

    return matchingUrl[matchingUrl.length - 1];
}

const urls = [
    {
        title:       "Home",
        redirectUrl: "/"
    },
    {
        title:       "Tech",
        redirectUrl: "/tech"
    },
    {
        title:       "Blog",
        redirectUrl: "/blog"
    },
    {
        title:       "Resume",
        redirectUrl: "/resume"
    },
    {
        title:       "Credits",
        redirectUrl: "/credits"
    }
];

export default Nav;
