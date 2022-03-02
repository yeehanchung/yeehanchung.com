/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";

/* --- UI COMPONENTS --- */
import { Container, Seo } from "@components/index";
import {
    CliNotes,
    DocusaurusNotes,
    GitNotes,
    MiscNotes,
    WordPressNotes,
    JavaScriptNotes,
    HowToNotes,
} from "@components/tech";

/* --- IMAGES --- */
import yeehan_img from "@images/yee-han-chung.jpeg";

/* --- STYLED COMPONENTS --- */
export const NoteListing = styled.div`
    column-width: 20rem;
    column-gap: 2rem;
    max-width: 120ch;
    margin: 4rem auto;

    @media ${(props) => props.theme.breakpoints.mobile} {
        column-width: 15rem;
    }
    `;

/* --- TYPES --- */

export default () => {

    return (
        <>
            <Container>
                <Seo image={yeehan_img} title={"Yee Han's Dev Blog"} />
                <NoteListing>
                    {/* <ApiNotes /> */}
                    <CliNotes />
                    {/* <CssNotes /> */}
                    <DocusaurusNotes />
                    {/* <GatsbyNotes /> */}
                    <GitNotes />
                    <HowToNotes />
                    <JavaScriptNotes />
                    {/* <ReactNotes /> */}
                    {/* <ReduxNotes /> */}
                    <WordPressNotes />
                    <MiscNotes />
                </NoteListing>
            </Container>
        </>
    );
};
