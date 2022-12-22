/* --- NODE MODULES --- */
import React from "react";

/* --- UI COMPONENTS --- */
import { ButtonWrapper } from "@design-system/index";

interface Props {
    children: React.ReactChild;
    href: string;
    size: React.ReactNode;
}

export const Button = ({ children, href, size }: Props ): JSX.Element => {
    
    return (
        <ButtonWrapper to={`/${href}`} size={size}>
            {children}
        </ButtonWrapper>
    );
};
