/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";

/* --- UI COMPONENTS --- */
import { Container, Seo } from "@components/index";
import { ReinventionBlog, SoftwareEngineeringBlog } from "@components/blog";

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
    state: {key: string};
}

/* --- STYLED COMPONENTS --- */
export const NoteListing = styled.div`
    & ul:first-child {
        padding-top: 50px;
    }
`;

export default (): React.ReactElement => {

    return (
        <Container>
            <Seo image={OG_image} title={"Yee Han's Personal Blog"} />
            <NoteListing>
                <ReinventionBlog />
                <SoftwareEngineeringBlog />
            </NoteListing>
        </Container>
    );
};
