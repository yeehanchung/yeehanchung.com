/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";

/* --- UI COMPONENTS --- */
import { ReinventionBlog, SoftwareEngineeringBlog } from "@components/blog";
import { Container, Seo } from "@components/index"; 

/* --- IMAGES --- */
import OG_image from "@images/og_image.jpeg";

/* --- TYPES --- */
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
    column-width: 20rem;
    column-gap: 2rem;
    max-width: 120ch;
    margin: 4rem auto;

    @media ${(props) => props.theme.breakpoints.mobile} {
        column-width: 15rem;
    }

    @media ${(props) => props.theme.breakpoints.tablet} {
        column-width: 15rem;
    }
`;

export default ({ location }: I_Location): React.ReactElement => {

    return (
        <Container location={location}>
            <Seo image={OG_image} title={"Yee Han's Personal Blog"} />
            {/**
              * Blogs
              */}
            <NoteListing>
                <ReinventionBlog />
                <SoftwareEngineeringBlog />
            </NoteListing>
        </Container>
    );
};
