/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    // https://stackoverflow.com/questions/46865880/react-16-warning-expected-server-html-to-contain-a-matching-div-in-div-due
    flags: {
        DEV_SSR: false,
    },
    siteMetadata: {
        author: 'Yee Han Chung',
        shortName: 'Yee Han',
        title: `Yee Han's Internet Profile`,
        description: `Yee Han's Internet Profile`,
        occupation: 'Software Engineer',
        url: 'https://www.yeehan.me',
        image: './src/img/og_image.jpeg',
        keywords: [
            'yeehanchung',
            'yeehan',
            'chungyehan',
            'yee han',
            'yee han chung',
        ],
        social: {
            githubUrl: 'https://github.com/yeehanchung',
            linkedInUrl: 'https://linkedin.com/in/yeehanchung',
            facebookUrl: 'https://www.facebook.com/cyeehannn',
            twitterUrl: 'https://twitter.com/yeehanchung',
            instagramUrl: 'https://www.instagram.com/cyeehannn/',
        },
        socialImage: {
            githubUrl: './src/img/github.svg',
        },
    },
    /* Your site config here */
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-sharp`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: `pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content`,
                name: `content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content/tech`,
                name: `tech`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/img`,
                name: `img`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-figure-caption`,
                        options: { figureClassName: 'md-figure' },
                    },
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 700,
                            quality: 100,
                        },
                    },
                    `gatsby-remark-reading-time`,
                    {
                        // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: 'language-',
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
                            languageExtensions: [
                                {
                                    language: 'superscript',
                                    extend: 'javascript',
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            // Customize the prompt used in shell output
                            // Values below are default
                            prompt: {
                                user: 'root',
                                host: 'localhost',
                                global: false,
                            },
                        },
                    },
                ],
            },
        },
    ],
};
