/* --- NODE MODULES --- */
import styled, { ThemedStyledProps } from "styled-components";

interface I_Props {
    textAlign?: string;
    margin?: number;
}

const ResumeWrapperV2 = styled.main<ThemedStyledProps<I_Props, HTMLDivElement>>`
    font-family: ${(props) => props.theme.fonts.main};
    color: #d2d2d2;
    display: flex;
    flex-direction: column;
    max-width: 60ch;
    margin: 0 auto 2rem;
    padding-left: 10px;
    padding-bottom: 2rem;
    z-index: 10;

    /* ---------------- Headers: start ---------------- */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${(props) => props.theme.colors.dark1};
    }

    h1 {
        font-family: ${(props) => props.theme.H1};
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 60px;
        color: #495057;
        text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
        margin: ${(props) => (props.margin ? props.margin : 0)};

        @media ${(props) => props.theme.breakpoints.mobile} {
            font-size: 1.5rem;
        }
    }

    h2 {
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 1.75rem;
        margin: 1.25rem 0 0.5rem 0;
    }

    h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin: 1.4rem 0 0.25rem 0;
    }

    h4 {
        font-size: 0.85rem;
        font-weight: 400;
        line-height: 1.5rem;
        font-style: italic;
        margin: 0.2em 0;
    }

    h5 {
        font-size: 1.125rem;
        line-height: 1.375rem;
    }

    h6 {
        color: hsl(227, 2%, 26%);
        font-size: 0.9rem;
        line-height: 1.125rem;
        text-align: center;
        text-decoration: none;
    }
    /* ---------------- Headers: end ---------------- */

    p {
        font-size: 0.9rem;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${(props) => props.theme.colors.dark2};
        display: inline-flex;
        margin-bottom: 1.25rem;
    }

    details {
    }

    .view-contributions > summary {
        padding-bottom: 0.25rem;
    }

    summary {
        font-size: var(--font-size-list);
        color: #414244;
        line-height: 1.3rem;
        text-align: -webkit-match-parent;
        unicode-bidi: isolate;
        font-variant-numeric: tabular-nums;

        &::marker {
            color: black;
            font-size: 0.75rem;
        }
    }

    /* --------- Details: start --------- */
    details {
        margin: 0 0 0 0;
    }

    .details-q > ul {
        margin-top: 0.25rem;
    }

    .details-css {
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .details-css > ul {
        padding-top: 0.5rem;
    }
    /* --------- Details: end --------- */

    /* --------- Summary: start --------- */
    summary {
        cursor: pointer;
        list-style-position: inside;
        text-indent: -1em;
        padding-left: 1em;
    }

    .summary-second {
        margin-bottom: 0;
    }

    .summary-second > ul {
        color: red !important;
        margin-top: 0.5rem;
    }
    /* --------- Summary: end --------- */

    .resume.img {
        float: left;
        width: 250px;
        height: 100%;
    }

    a {
        color: ${(props) => props.theme.colors.main1};
        text-decoration: none;
    }

    strong {
        font-weight: 700;
    }

    em {
        font-style: italic;
    }

    del {
        text-decoration: line-through;
    }

    blockquote p {
        font-style: italic;
        border-left: 4px solid #f3f3f3;
        font-size: 1.1rem;
        line-height: 1.8rem;
        text-align: left;
        padding: 1rem;
    }

    span {
        padding: 0 0.5rem 0 0;
        font-size: 0.9rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    /* ----------------- ul, ol, li: start ----------------- */
    ul,
    ol {
        color: ${(props) => props.theme.colors.dark2};
        margin: 0 0 0rem 1rem;
        display: inline-block;
    }

    li {
        font-size: 0.85rem;
        line-height: 1.3rem;
        font-weight: 400;
        margin: 0 0 0 0;
    }

    li:first-child {
        margin: 0 0 0 0;
    }
    /* ----------------- ul, ol, li: end ----------------- */

    code {
        background-color: ${(props) => props.theme.colors.codebg};
        border-radius: 0.3em;
        color: ${(props) => props.theme.colors.codefont};
        font-family: ${(props) => props.theme.fonts.code};
        font-size: 0.9rem;
        padding: 0.05em 0.4em 0.05em;
    }

    hr {
        background: ${(props) => props.theme.colors.dark1};
        border: 0;
        height: 1px;
        opacity: 0.2;
        margin: 2rem 0;
    }

    /* -------------- table, th, td: start --------------  */
    table {
        width: 100%;
        border-spacing: 0.25rem;
        border-collapse: collapse;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    table,
    th,
    td {
        border: 1px solid ${(props) => props.theme.colors.dark3};
    }

    th,
    td {
        text-align: left;
    }

    td:first-child {
        font-size: 1.3rem;
        width: 10%;
        position: absolute;
    }

    td:nth-last-child(1) {
        padding: ${(props) =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.xLarge}`};
        margin-left: 10px;

        /* Tablet */
        @media ${(props) => props.theme.breakpoints.tablet} {
            padding: ${(props) =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.xLarge}`};
        }

        /* Mobile */
        @media ${(props) => props.theme.breakpoints.mobile} {
            padding: ${(props) =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.x2Large}`};
        }
    }
    /* -------------- table, th, td: end --------------  */

    /* ---------------- gatsby image wrapper: start ---------------- */

    span[class='gatsby-resp-image-wrapper'] {
        margin-top: 0.25rem;
        float: left;
        width: 250px;
        height: 100%;
    }

    p > span[class='gatsby-resp-image-wrapper'] {
        margin-top: 0.75rem;
    }

    ul > span[class='gatsby-resp-image-wrapper'] {
        margin-bottom: 0.5rem;
    }

    /* ---------------- gatsby image wrapper: end ---------------- */
`;

const ResumeWrapper = styled.main<ThemedStyledProps<I_Props, HTMLDivElement>>`
    font-family: ${(props) => props.theme.fonts.main};
    color: #d2d2d2;
    display: flex;
    flex-direction: column;
    max-width: 90ch;
    margin: 0 auto 2rem;
    padding-bottom: 2rem;
    z-index: 10;

    /* ---------------- Headers: start ---------------- */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${(props) => props.theme.colors.dark1};
    }

    h1 {
        font-family: ${(props) => props.theme.H1};
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 60px;
        color: #495057;
        text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
        margin: ${(props) => (props.margin ? props.margin : 0)};

        @media ${(props) => props.theme.breakpoints.mobile} {
            font-size: 1.5rem;
        }
    }

    h2 {
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 1.75rem;
        margin: 1.25rem 0 0.5rem 0;
    }

    h3 {
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0.8rem 0 0.25rem 0;
    }

    h4 {
        font-size: 0.85rem;
        font-weight: 400;
        line-height: 1.5rem;
        font-style: italic;
        margin: 0.2em 0;
    }

    h5 {
        font-size: 1.125rem;
        line-height: 1.375rem;
    }

    h6 {
        color: hsl(227, 2%, 26%);
        font-size: 0.9rem;
        line-height: 1.125rem;
        text-align: center;
        text-decoration: none;
    }
    /* ---------------- Headers: end ---------------- */

    p {
        font-size: 0.9rem;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${(props) => props.theme.colors.dark2};
        display: inline-flex;
        margin-bottom: 1.25rem;
    }

    details {
    }

    .view-contributions > summary {
        padding-bottom: 0.25rem;
    }

    summary {
        font-size: var(--font-size-list);
        color: #414244;
        line-height: 1.3rem;
        text-align: -webkit-match-parent;
        unicode-bidi: isolate;
        font-variant-numeric: tabular-nums;

        &::marker {
            color: black;
            font-size: 0.75rem;
        }
    }

    /* --------- Details: start --------- */
    details {
        margin: 0 0 0 0;
    }

    .details-q > ul {
        margin-top: 0.25rem;
    }

    .details-css {
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .details-css > ul {
        padding-top: 0.5rem;
    }
    /* --------- Details: end --------- */

    /* --------- Summary: start --------- */
    summary {
        cursor: pointer;
        list-style-position: inside;
        text-indent: -1em;
        padding-left: 1em;
    }

    .summary-second {
        margin-bottom: 0;
    }

    .summary-second > ul {
        color: red !important;
        margin-top: 0.5rem;
    }
    /* --------- Summary: end --------- */

    .resume.img {
        float: left;
        width: 250px;
        height: 100%;
    }

    a {
        color: ${(props) => props.theme.colors.main1};
        text-decoration: none;
    }

    strong {
        font-weight: 700;
    }

    em {
        font-style: italic;
    }

    del {
        text-decoration: line-through;
    }

    blockquote p {
        font-style: italic;
        border-left: 4px solid #f3f3f3;
        font-size: 1.1rem;
        line-height: 1.8rem;
        text-align: left;
        padding: 1rem;
    }

    span {
        padding: 0 0.5rem 0 0;
        font-size: 0.9rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    /* ----------------- ul, ol, li: start ----------------- */
    ul,
    ol {
        color: ${(props) => props.theme.colors.dark2};
        margin: 0 0 0rem 1rem;
        display: inline-block;
    }

    li {
        font-size: 0.85rem;
        line-height: 1.3rem;
        font-weight: 400;
        margin: 0 0 0 0;
    }

    li:first-child {
        margin: 0 0 0 0;
    }
    /* ----------------- ul, ol, li: end ----------------- */

    code {
        background-color: ${(props) => props.theme.colors.codebg};
        border-radius: 0.3em;
        color: ${(props) => props.theme.colors.codefont};
        font-family: ${(props) => props.theme.fonts.code};
        font-size: 0.9rem;
        padding: 0.05em 0.4em 0.05em;
    }

    hr {
        background: ${(props) => props.theme.colors.dark1};
        border: 0;
        height: 1px;
        opacity: 0.2;
        margin: 2rem 0;
    }

    /* -------------- table, th, td: start --------------  */
    table {
        width: 100%;
        border-spacing: 0.25rem;
        border-collapse: collapse;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    table,
    th,
    td {
        border: 1px solid ${(props) => props.theme.colors.dark3};
    }

    th,
    td {
        text-align: left;
    }

    td:first-child {
        font-size: 1.3rem;
        width: 10%;
        position: absolute;
    }

    td:nth-last-child(1) {
        padding: ${(props) =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.xLarge}`};
        margin-left: 10px;

        /* Tablet */
        @media ${(props) => props.theme.breakpoints.tablet} {
            padding: ${(props) =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.xLarge}`};
        }

        /* Mobile */
        @media ${(props) => props.theme.breakpoints.mobile} {
            padding: ${(props) =>
        `${props.theme.spacings.small} 0 0 ${props.theme.spacings.x2Large}`};
        }
    }
    /* -------------- table, th, td: end --------------  */

    /* ---------------- gatsby image wrapper: start ---------------- */

    span[class='gatsby-resp-image-wrapper'] {
        margin-top: 0.25rem;
        float: left;
        width: 250px;
        height: 100%;
    }

    p > span[class='gatsby-resp-image-wrapper'] {
        margin-top: 0.75rem;
    }

    ul > span[class='gatsby-resp-image-wrapper'] {
        margin-bottom: 0.5rem;
    }

    /* ---------------- gatsby image wrapper: end ---------------- */
`;

export default {
    ResumeWrapperV2,
    ResumeWrapper
};
