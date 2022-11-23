/* --- NODE MODULES --- */
import styled from "styled-components";

export const NavWrapper = styled.nav`
    & a:first-child {
        margin-left: 0;
    }
    & a:last-child {
        margin-right: 0;
    }

    display: flex;
    padding-top: 50px;
    text-align: center;
`;
