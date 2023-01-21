/* --- NODE MODULES --- */
import styled from "styled-components";

const FooterWrapper = styled.div`
    padding-top: 25px;
`;

const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;

    p {
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
