/* --- LIBRARIES --- */
import styled from 'styled-components'

export const NoteListing = styled.div`
    column-width: 20rem;
    column-gap: 2rem;
    max-width: 120ch;
    margin: 4rem auto;

    @media ${(props) => props.theme.breakpoints.mobile} {
        column-width: 15rem;
    }

    @media ${(props) => props.theme.breakpoints.tablet} {
        column-width: 15rem;
    }
`;
