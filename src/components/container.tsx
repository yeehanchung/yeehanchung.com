/* --- NODE MODULES --- */
import React from "react";

/* --- UI COMPONENTS --- */
import { Footer, Nav } from "@components/index";
import { ContainerWrapper } from "@design-system/index";

interface I_Props {
    children?: React.ReactNode;
}

export default function Container(props: React.PropsWithChildren<I_Props>): JSX.Element {

    return (
        <ContainerWrapper>

            <Nav />

            {props.children}

            <Footer />

        </ContainerWrapper>
    );
};
