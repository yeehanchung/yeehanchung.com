/* --- NODE MODULES --- */
import styled from "styled-components";

const NavWrapper = styled.nav`
    & a:first-child {
        margin-left: 0;
    }
    & a:last-child {
        margin-right: 0;
    }

    display: flex;
    margin: 0 auto;
    padding-top: 50px;
    width: 400px;
    text-align: center;

    // @media ${(props) => props.theme.breakpoints.mobile} {
    //     display: grid;

    //     padding-top: 3rem;
    //     margin-left: 0;
    //     margin-right: auto;
        
    //     justify-items: center;
    //     align-items: center;
    //     align-content: center;

    //     grid-row: auto auto;
    //     grid-column-gap: 20px;
    //     grid-row-gap: 20px;
    //     grid-template-columns: 25px 100px 25px;
    // }
`;

export default NavWrapper;
