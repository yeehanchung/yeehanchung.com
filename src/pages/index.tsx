/* --- NODE MODULES --- */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

/* --- UI COMPONENTS --- */
import {
    Author,
    Container,
    Seo
} from "@components/index";
import { AuthorElements } from "@design-system/index";

/* --- IMAGES --- */
import og_img from "@images/og_image.jpeg";

const IndexPage = (): React.ReactElement => {

    const data = useStaticQuery(graphql`
        query {
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
    `);

    return (
        <Container>
            <Seo
                image={og_img}
                title={data.site.siteMetadata.title}
                author={data.site.siteMetadata.author}
                keywords={data.site.siteMetadata.keywords}
            />
            <AuthorElements.AuthorWrapper>
                <AuthorElements.AuthorDetails>
                    <Author ogImage={og_img} />
                </AuthorElements.AuthorDetails>
            </AuthorElements.AuthorWrapper>
        </Container>
    );
};

export default IndexPage;
