/* --- NODE MODULES --- */
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ButtonWrapper = styled((props): JSX.Element => <Link {...props} />)`
    color: #3fa4e1;
    cursor: pointer;
    text-decoration: none;
    line-height: 1.2rem;
    font-size: ${(props): string => {
        switch (props.size) {
        case "medium": return "1.5rem";
        case "small": return "0.9rem";
        case "xSmall": return "0.8rem";
        default: return "1.125rem";
        }
    }};
    font-weight: ${(props): number => {
        switch (props.size) {
        case "small": return 600;
        default: return 500;
        }
    }};
`;

export default ButtonWrapper;
