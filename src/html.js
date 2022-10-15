/* --- NODE MODULES --- */
import PropTypes from "prop-types";
import React from "react";

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />

                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-2QF8FBPNDV"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-2QF8FBPNDV');
            `,
                    }}
                />
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={"body"}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes:     PropTypes.object,
    headComponents:     PropTypes.array,
    bodyAttributes:     PropTypes.object,
    preBodyComponents:  PropTypes.array,
    body:               PropTypes.string,
    postBodyComponents: PropTypes.array,
};
