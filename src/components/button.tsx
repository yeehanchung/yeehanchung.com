/* --- NODE MODULES --- */
import React from "react";

/* --- UI COMPONENTS --- */
import { ButtonWrapper } from "@design-system/index";

interface Props {
    children: React.ReactChild;
    href: string;
    size: React.ReactNode;
}

const Button = ({ children, href, size }: Props ) => {
    
    return (
        <ButtonWrapper to={`/${href}`} size={size}>
            {children}
        </ButtonWrapper>
    );
};

export default Button;