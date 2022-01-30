/* --- NODE MODULES --- */
import styled from "styled-components";

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0 0;
    margin: 0 auto;
    max-width: 70rem;
    text-align: center;

    @media ${(props) => props.theme.breakpoints.mobile} {
        display: grid;

        padding-top: 3rem;
        margin-left: 0;
        margin-right: auto;
        
        justify-items: center;
        align-items: center;
        align-content: center;

        grid-row: auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        grid-template-columns: 25px 100px 25px;
    }
`;

export default NavWrapper;
