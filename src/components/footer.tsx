/* --- NODE MODULES --- */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

/* --- UI COMPONENTS --- */
import { A } from "@design-system/Typography";
import { FooterElements, Typography } from "@design-system/index";

const Footer = (): React.ReactElement => {

    const { site } = useStaticQuery(graphql`
		query {
			linkedin: file(relativePath: { eq: "linkedin.svg" }) {
				publicURL
			}
			github: file(relativePath: { eq: "github.svg" }) {
				publicURL
			}
			facebook: file(relativePath: { eq: "facebook.svg" }) {
				publicURL
			}
			instagram: file(relativePath: { eq: "instagram.svg" }) {
				publicURL
			}
			site {
				siteMetadata {
					author
					shortName
					title
					description
					occupation
					url
					image
					social {
						githubUrl
						linkedInUrl
						facebookUrl
						twitterUrl
						instagramUrl
					}
					keywords
				}
			}
		}
	`);

    const data = site.siteMetadata;

    return (
        <FooterElements.FooterWrapper>
            <FooterElements.FooterSocialWrapper>
                <Typography.P size="xSmall" color="dark3">
					Built by {data.shortName}
                    {" "}
                    <A href="https://github.com/yeehanchung/yeehanchung.com">
                        {"</>"}
                    </A>
                    {" "}
                    <span role="img" aria-label="Copyright">
						&copy;
                    </span>
                    {" "}
					2020 - {new Date().getFullYear()}. All Rights Reserved.
                </Typography.P>
            </FooterElements.FooterSocialWrapper>
        </FooterElements.FooterWrapper>
    );
};

export default Footer;
