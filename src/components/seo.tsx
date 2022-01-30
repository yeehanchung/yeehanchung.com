/* --- NODE MODULES --- */
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

interface I_Props {
    image: string;
    title: string;
    description?: string;
    keywords?: string[];
    url?: string;
    author?: string;
}

const Seo = (props: React.PropsWithChildren<I_Props>): React.ReactElement => {

    return (
        <StaticQuery
            query={detailsQuery}
            render={(data) => {
                const metaTitle = props.title || data.site.siteMetadata.title;
                const metaDescription =
                    props.description || data.site.siteMetadata.description;
                const metaAuthor = props.author || data.site.siteMetadata.author;
                const metaUrl = props.url || data.site.siteMetadata.url;
                const metaImage = props.image || data.site.siteMetadata.image;
                const metaKeywords =
                    props.keywords || data.site.siteMetadata.keywords;

                return (
                    <Helmet
                        title={metaTitle}
                        meta={[
                            {
                                name:    "description",
                                content: metaDescription,
                            },
                            {
                                property: "og:title",
                                content:  metaTitle,
                            },
                            {
                                property: "og:description",
                                content:  metaDescription,
                            },
                            {
                                property: "og:type",
                                content:  "website",
                            },
                            {
                                property: "og:image",
                                content:  metaImage,
                            },
                            {
                                property: "og:url",
                                content:  metaUrl,
                            },
                            {
                                name:    "twitter:card",
                                content: "summary_large_image",
                            },
                            {
                                name:    "twitter:creator",
                                content: metaAuthor,
                            },
                            {
                                name:    "twitter:title",
                                content: metaTitle,
                            },
                            {
                                name:    "twitter:description",
                                content: metaDescription,
                            },
                            {
                                name:    "twitter:image",
                                content: metaImage,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0
                                ? {
                                    name:    "keywords",
                                    content: metaKeywords.join(","),
                                }
                                : [],
                        )}
                    />
                );
            }} />
    );
};

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                image
                url
                keywords
            }
        }
    }
`;

export default Seo;
