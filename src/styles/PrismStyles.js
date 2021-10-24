import { css } from 'styled-components';

const prismColors = {
    bg: `#112340`,
    lineHighlight: `#1d2d50`,
    blue: `#5ccfe6`,
    purple: `#c3a6ff`,
    green: `#bae67e`,
    yellow: `#ffd580`,
    orange: `#ffae57`,
    red: `#ef6b73`,
    grey: `#a2aabc`,
    comment: `#8695b799`,
};

export const PrismStyles = css`
    /* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+git+graphql+markdown+markup-templating+php+sass+scss+sql&plugins=show-language+normalize-whitespace+toolbar */
    /**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */
    /* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+git+graphql+markdown+markup-templating+php+sass+scss+sql&plugins=show-language+normalize-whitespace+toolbar */
    /**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */
    /* .hello {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
} */

    @font-face {
        font-family: Consolas, monospace;
        src: url(./src/fonts/Consolas.ttf);
    }

    code[class*='language-'],
    pre[class*='language-'] {
        /* color: red; */
        background: none;
        /* font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace; */
        font-family: Monaco, Menlo, monospace;
        /* font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace; */
        font-size: 0.7rem;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.45;
        border-radius: 10px;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;

        font-size: 95%;
        /* line-height: 1.7; */
        /* background: #efedf0; */
        /* padding: 0.25rem; */
        border-radius: 0.375rem;
        background: white;
    }

    /* Code blocks */
    pre[class*='language-'] {
        padding: 1em;
        margin: 2.5rem 0;
        overflow: auto;
        letter-spacing: 0.025rem;
    }

    .gatsby-highlight {
        font-size: 0.8rem;
        position: relative;
        -webkit-overflow-scrolling: touch;
    }
    .gatsby-highlight pre[class*='language-'] {
        -webkit-overflow-scrolling: touch;
        /* NEW */
        /* padding: 1rem; */
        padding: 1.5rem 1rem 1rem;
        line-height: 1.5;
    }
    .gatsby-highlight pre[class*='language-']::before {
        /* background: rgb(40, 42, 54); */
        border-radius: 0.25rem 0.25rem 0 0;
        color: #ff5e62;
        font-size: 12px;
        letter-spacing: 0.025rem;
        padding: 0.2rem 0.5rem;
        position: absolute;
        right: 1rem;
        text-align: right;
        text-transform: uppercase;
        top: 3px;
    }
    /* Start of language tab */
    .gatsby-highlight pre[class~='language-js']::before {
        content: 'js';
        /* background: rgb(40, 42, 54); */
        background: #0a192f;
        color: #ff5e62;
    }

    .gatsby-highlight pre[class~='language-html']::before {
        content: 'html';
        /* background: rgb(40, 42, 54); */
        background: #0a192f;
        color: #ff5e62;
    }

    .gatsby-highlight pre[class~='language-css']::before {
        content: 'css';
        /* background: rgb(40, 42, 54); */
        background: #0a192f;
        color: #ff5e62;
    }

    .gatsby-highlight pre[class~='language-php']::before {
        content: 'php';
        /* background: rgb(40, 42, 54); */
        background: #0a192f;
        color: #ff5e62;
    }

    .gatsby-highlight pre[class~='language-wordpress']::before {
        content: 'wordpress';
        /* background: rgb(40, 42, 54); */
        background: #0a192f;
        color: #ff5e62;
    }

    .gatsby-highlight pre[class~='language-regex']::before {
        content: 'regex';
        /* background: rgb(40, 42, 54); */
        background: #0a192f;
        color: #ff5e62;
    }

    .gatsby-highlight pre[class~='language-md']::before {
        content: 'md';
        /* background: rgb(40, 42, 54); */
        background: #0a192f;
        color: #ff5e62;
    }

    .gatsby-highlight pre[class~='language-shell']::before {
        content: 'shell';
        /* background: rgb(40, 42, 54); */
        background: #0a192f;
        color: #ff5e62;
    }

    .gatsby-highlight pre[class~='language-git']::before {
        content: 'git';
        background: rgb(40, 42, 54);
        color: #ff5e62;
    }
    /* End of language tab */

    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
        /* background: #2d2d2d; */
        background: #0a192f;
    }

    /* Inline code */
    :not(pre) > code[class*='language-'] {
        /* padding: 0.1em; */
        /* border-radius: 0.1rem; */
        white-space: normal;
        /* Important */

        font-size: 85%;
        line-height: 1.7;
        /* background: #efedf0; */
        padding: 0.25rem;
        border-radius: 0.375rem;
        background: white;
    }

    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #999;
    }

    .token.punctuation {
        color: #ccc;
    }

    .token.tag,
    .token.attr-name,
    .token.namespace,
    .token.deleted {
        color: #e2777a;
    }

    .token.function-name {
        color: #6196cc;
    }

    .token.boolean,
    .token.number,
    .token.function {
        color: #f08d49;
    }

    .token.property,
    .token.class-name,
    .token.constant,
    .token.symbol {
        color: #f8c555;
    }

    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
        color: #cc99cd;
    }

    .token.string,
    .token.char,
    .token.attr-value,
    .token.regex,
    .token.variable {
        color: #7ec699;
    }

    .token.operator,
    .token.entity,
    .token.url {
        color: #67cdcc;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }

    .token.inserted {
        color: green;
    }

    /*  */
    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: ${prismColors.comment};
    }
    .token.punctuation {
        color: ${prismColors.grey};
    }
    .token.namespace,
    .token.deleted {
        color: ${prismColors.red};
    }
    .token.function-name,
    .token.function,
    .token.class-name,
    .token.constant,
    .token.symbol {
        color: ${prismColors.yellow};
    }
    .token.attr-name,
    .token.operator,
    .token.rule {
        color: ${prismColors.orange};
    }
    .token.keyword,
    .token.boolean,
    .token.number,
    .token.property {
        color: ${prismColors.purple};
    }
    .token.tag,
    .token.selector,
    .token.important,
    .token.atrule,
    .token.builtin,
    .token.entity,
    .token.url {
        color: ${prismColors.blue};
    }
    .token.string,
    .token.char,
    .token.attr-value,
    .token.regex,
    .token.variable,
    .token.inserted {
        color: ${prismColors.green};
    }
    .token.important,
    .token.bold {
        font-weight: 600;
    }
    .token.italic {
        font-style: italic;
    }
    .token.entity {
        cursor: help;
    }
    .namespace {
        opacity: 0.7;
    }
    /*  */

    div.code-toolbar {
        position: relative;
    }

    div.code-toolbar > .toolbar {
        position: absolute;
        top: 0.3em;
        right: 0.2em;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

    div.code-toolbar:hover > .toolbar {
        opacity: 1;
    }

    /* Separate line b/c rules are thrown out if selector is invalid.
    IE11 and old Edge versions don't support :focus-within. */
    div.code-toolbar:focus-within > .toolbar {
        opacity: 1;
    }

    div.code-toolbar > .toolbar .toolbar-item {
        display: inline-block;
    }

    div.code-toolbar > .toolbar a {
        cursor: pointer;
    }

    div.code-toolbar > .toolbar button {
        background: none;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        -webkit-user-select: none; /* for button */
        -moz-user-select: none;
        -ms-user-select: none;
    }

    div.code-toolbar > .toolbar a,
    div.code-toolbar > .toolbar button,
    div.code-toolbar > .toolbar span {
        color: #bbb;
        font-size: 0.8em;
        padding: 0 0.5em;
        background: #f5f2f0;
        background: rgba(224, 224, 224, 0.2);
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
        border-radius: 0.5em;
    }

    div.code-toolbar > .toolbar a:hover,
    div.code-toolbar > .toolbar a:focus,
    div.code-toolbar > .toolbar button:hover,
    div.code-toolbar > .toolbar button:focus,
    div.code-toolbar > .toolbar span:hover,
    div.code-toolbar > .toolbar span:focus {
        color: inherit;
        text-decoration: none;
    }
`;
