
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

/* --- CONFIG --- */
import { AppConfig } from "../../config";

/* --- STYLED COMPONENTS --- */
const NavElement = styled((props) => {
    const { isActiveUrl, ...rest } = props;
    return (
        <Link { ...rest } />
    );
})`
    display: flex;
    color: ${(props) => props.isActiveUrl? Colors.sunsetTint : "black" };
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

    if (typeof window === "undefined") {
        return null as never;
    }

    const cliSVG = data.cli.publicURL;

    return (
        <NavWrapper>
            {/* <NavElement to={"/"}>
                <HomeImgWrapper>
                    <HomeImg alt="Home" src={cliSVG} />
                </HomeImgWrapper>
            </NavElement> */}

            {AppConfig.navigationRoutes.map(url => {

                const isActiveUrl = url.path.split("/")[1] === window.location.pathname.split("/")[1];

                return (
                    <NavElement
                        key={url.title}
                        to={url.path}
                        isActiveUrl={isActiveUrl}>
                        {url.title}
                    </NavElement>
                );
            })}
        </NavWrapper>
    );
};

export default Nav;
