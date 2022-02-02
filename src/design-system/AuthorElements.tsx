/* --- NODE MODULES --- */
import styled from "styled-components";

const AuthorWrapper = styled.div`
    font-family: ${(props) => props.theme.fonts.main};
    display: flex;
    flex-direction: column;
    max-width: 90ch;
    padding: 2rem 0 3rem;
    margin: 0 auto 2rem;
    align-items: center;
`;

const ResumeAuthorWrapper = styled.div`
    font-family: ${(props) => props.theme.fonts.main};
    display: flex;
    flex-direction: column;
    max-width: 90ch;
    padding-top: 3rem;
    margin: 0 auto;
`;

const AuthorDetails = styled.div`
    h3 {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.25rem;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.5rem;
        font-weight: 400;
        color: hsl(227, 2%, 26%);
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        margin-bottom: 1.25rem;
        margin-bottom: 0.5rem;
    }

    a {
        color: ${(props) => props.theme.colors.main1};
        text-decoration: none;
    }
`;

export { AuthorWrapper, ResumeAuthorWrapper, AuthorDetails };
