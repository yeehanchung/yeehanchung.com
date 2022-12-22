
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
import { SiteRoutesContext } from "../context/context-site-routes";

/* --- CONFIG --- */
import { AppConfig } from "../../config";

/* --- STYLED COMPONENTS --- */
const NavElement = styled((props) => {
    const { isActiveUrl, ...rest } = props;
    return (
        <Link {...rest} />
    );
})`
    display: flex;
    color: ${(props) => props.isActiveUrl ? Colors.sunsetTint : "black"};
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

const NavWrapperPlaceholder = styled.div`
    height: 70px;
`;

export default function Nav(): JSX.Element {

    const siteRoutesCtx = React.useContext(SiteRoutesContext);

    return (
        <NavWrapper>
            {/* <NavElement to={"/"}>
                <HomeImgWrapper>
                    <HomeImg alt="Home" src={cliSVG} />
                </HomeImgWrapper>
            </NavElement> */}

            {AppConfig.navigationRoutes.map((url): JSX.Element => {

                /* Always remove first slash */
                let currentRoute = url.path.split("/")[1];

                /* If is homepage, modify it to be a slash path */
                if (url.path.split("/")[1] === "") {
                    currentRoute = "/";
                }

                const isActiveUrl = siteRoutesCtx.route === currentRoute;

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
