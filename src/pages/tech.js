/* --- LIBRARIES --- */
import React from 'react';

/* --- UI COMPONENTS --- */
import { Container, Seo } from '../components';
import {
    CliNotes,
    DocusaurusNotes,
    GitNotes,
    MiscNotes,
    WordPressNotes,
    JavaScriptNotes,
} from '../components/tech-topics';
import { NoteListing } from '../styled';

/* --- IMAGES --- */
import OG_image from '../img/og_image.jpeg';

const Tech = ({ location }) => {
    return (
        <>
            <Container location={location}>
                <Seo image={OG_image} title={"Yee Han's Dev Blog"} />
                <NoteListing>
                    {/* <ApiNotes /> */}
                    <CliNotes src={"cli"} />
                    {/* <CssNotes /> */}
                    <DocusaurusNotes />
                    {/* <GatsbyNotes /> */}
                    <GitNotes />
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

export default Tech;
