/* --- NODE MODULES --- */
import styled from "styled-components";

const FooterWrapper = styled.div`
    grid-column: 2 / span 12;
    min-height: 11.25rem;
    padding-top: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    grid-row: span 2/11;

    @media ${(props) => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`;

const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;

    p {
        text-align: center;
        flex: 0 0 100%;
    }
`;

const FooterSocialIcons = styled.div`
    flex: 0 0 100%;
    margin: 2rem 0 2rem 0;
    transition: all 0.5s;

    img {
        margin: 10px 0;
        padding: 0 3rem;
        transition: filter 0.3s;
    }

    img:hover,
    img:focus {
        transition: all 0.3s;
        filter: brightness(40%);
    }
`;

export { 
    FooterWrapper, 
    FooterSocialIcons,
    FooterSocialWrapper
};
