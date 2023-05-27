/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";

/* --- UI COMPONENTS --- */
import { Container, Seo } from "@components/index";
import { ReinventionBlog, SoftwareEngineeringBlog } from "@components/blog";
import { I_Props } from "pages";
import { SiteRoutesContext, SiteRoutesProvider } from "@context/context-site-routes";

/* --- IMAGES --- */
import OG_image from "@images/og_image.jpeg";

/* --- TYPES --- */
/**
 * @deprecated
 */
export interface I_Location {
    hash: string;
    location: string;
    host: string;
    hostname: string;
    href: string;
    key: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    state: { key: string; };
}

/* --- STYLED COMPONENTS --- */
export const NoteListing = styled.div`
    & ul:first-child {
        padding-top: 50px;
    }
`;

export default function BlogPageWrapper(props: I_Props): JSX.Element {
    return (
        <SiteRoutesProvider>
            <BlogPage location={props.location} />
        </SiteRoutesProvider>
    );
}

const BlogPage = (props: I_Props): JSX.Element => {

    const siteRoutesCtx = React.useContext(SiteRoutesContext);
    const currentRoute = props.location.pathname.split("/")[1];
    siteRoutesCtx.setRoute(currentRoute);

    return (
        <Container>
            <Seo image={OG_image} title={"Yeehan's Personal Blog"} />
            <NoteListing>
                <ReinventionBlog />
                <SoftwareEngineeringBlog />
            </NoteListing>
        </Container>
    );
};
