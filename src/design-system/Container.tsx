/* --- NODE MODULES --- */
import styled from "styled-components";

export const ContainerWrapper = styled.div`
    display: block;
    height: 100%;
    margin: 24px auto;
    max-width: 400px;

    @media ${(props) => props.theme.breakpoints.mobile} {
        padding: 0 24px;
    }

    /* https://github.com/JimmyBeldone/gatsby-plugin-breakpoints */
`;
