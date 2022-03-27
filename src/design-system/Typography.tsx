/* --- NODE MODULES --- */
import styled, { ThemedStyledProps } from "styled-components";

interface I_Props {
    textAlign?: string;
    margin?: string;
    textDecoration?: string;
    lineHeight?: string;
    weight?: string;
    size?: string;
}

const P = styled.p<ThemedStyledProps<I_Props, HTMLParagraphElement>>`
    text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
    margin: ${(props) => (props.margin ? props.margin : 0)};
    font-size: ${(props) => {
        switch (props.size) {
        case "medium":
            return "1.125rem";
        case "xMedium":
            return "0.9rem";
        case "small":
            return "0.9rem";
        case "xSmall":
            return "14px";
        case "xxSmall":
            return "10px";
        default:
            return "1.125rem";
        }
    }};
    line-height: ${(props) => {
        switch (props.lineHeight) {
        case "medium":
            return "1.8rem";
        case "small":
            return "1.375rem";
        case "xSmall":
            return "1.125rem";
        default:
            return "1.5rem";
        }
    }};
    text-decoration: ${(props) =>
        props.textDecoration ? props.textDecoration : "none"};
    font-weight: ${(props) => {
        switch (props.weight) {
        case "normal":
            return 400;
        case "bold":
            return 700;
        default:
            return 400;
        }
    }};

    color: ${(props) => {
        switch (props.color) {
        case "dark1":
            return props.theme.colors.dark1;
        case "dark2":
            return props.theme.colors.dark2;
        case "dark3":
            return props.theme.colors.dark3;
        case "dark4":
            return props.theme.colors.dark4;
        case "light1":
            return props.theme.colors.light1;
        case "light2":
            return props.theme.colors.light2;
        default:
            return props.theme.colors.dark1;
        }
    }};
`;

const A = styled.a`
    font-size: 0.9rem;
    font-weight: 700;
    color: #ff5e62;
    margin: 0 5px;
    text-decoration: none;

    &:first-child {
        margin: 0 5px 0 0;
    }

    &:last-child {
        margin: 0 0 0 5px;
    }

    &:hover {
        color: #357ae8;
        text-decoration-thickness: 0.1em;
        text-underline-offset: 1.5px;
        text-decoration: none;
    }
`;

const H1 = styled.h1<ThemedStyledProps<I_Props, HTMLHeadingElement>>`
    font-family: ${(props) => props.theme.H1};
    font-size: 2.25rem;
    line-height: 60px;
    color: #495057;
    text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
    margin: ${(props) => (props.margin ? props.margin : 0)};

    @media ${(props) => props.theme.breakpoints.mobile} {
        font-size: 1.5rem;
    }
`;

const H2 = styled.h2<ThemedStyledProps<I_Props, HTMLHeadingElement>>`
    font-size: 1.4rem;
    line-height: 1.875rem;
    color: ${(props) => {
        switch (props.color) {
        case "dark1":
            return props.theme.colors.dark1;
        case "dark2":
            return props.theme.colors.dark2;
        case "dark3":
            return props.theme.colors.dark3;
        case "light1":
            return props.theme.colors.light1;
        case "light2":
            return props.theme.colors.light2;
        default:
            return props.theme.colors.dark1;
        }
    }};
    font-weight: 500;
    text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
    margin: ${(props) => (props.margin ? props.margin : 0)};

    @media ${(props) => props.theme.breakpoints.mobile} {
        font-size: 21px;
    }
`;

export {
    P, A, H1, H2
};
