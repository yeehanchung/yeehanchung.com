/* --- NODE MODULES --- */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

/* --- UI COMPONENTS --- */
import { Typography } from "@design-system/index";

/* --- STYLES --- */
import * as styles from "../styles/author.module.scss";

/* --- IMAGES --- */
import yeehan_img from "@images/yee-han-chung-casual.jpg";

/* --- TYPES --- */
interface Props {
    ogImage?: string;
}

const Author = ({ ogImage }: Props): JSX.Element => {

    /* Data from gatsby-config.js */
    const {
        site, linkedin, github, twitter,
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    image
                    url
                    occupation
                    social {
                        githubUrl
                        linkedInUrl
                        facebookUrl
                        twitterUrl
                    }
                    socialImage {
                        githubUrl
                    }
                }
            }
            linkedin: file(relativePath: {eq: "linkedin.svg"}) {
                publicURL
            }
            github: file(relativePath: {eq: "github.svg"}) {
                publicURL
            }
            facebook: file(relativePath: {eq: "facebook.svg"}) {
                publicURL
            }
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }
            twitter: file(relativePath: {eq: "twitter.svg"}) {
                publicURL
            }
        }
    `);

    const data = site.siteMetadata;

    return (
        <div className={styles.person}>
            <img
                src={ogImage || yeehan_img}
                alt={data.author}
                className={styles.img}
                loading="lazy"
            />
            <div className={styles.intro}>
                <div className={styles.subtitle}>
                    <h3 className={styles.name}>
                        {data.author}
                    </h3>
                    <p>
                        {data.occupation}
                    </p>
                    <div className={styles.publicUrlRow}>
                        <div className={styles.publicUrlCol}>
                            <Typography.A
                                style={{
                                    margin: 0
                                }}
                                href={data.social.githubUrl}
                                rel="noopener noreferrer"
                                target="">
                                <img
                                    src={github.publicURL}
                                    alt="github"
                                    height="25px"
                                />
                            </Typography.A>
                        </div>
                        <div className={styles.publicUrlCol}>
                            <Typography.A
                                href={data.social.linkedInUrl}
                                rel="noopener noreferrer"
                                target="">
                                <img
                                    src={linkedin.publicURL}
                                    alt="linkedIn"
                                    height="25px"
                                />
                            </Typography.A>
                        </div>
                        <div className={styles.publicUrlCol}>
                            <Typography.A
                                href={data.social.twitterUrl}
                                rel="noopener noreferrer"
                                target="">
                                <img
                                    src={twitter.publicURL}
                                    alt="twitter"
                                    height="25px"
                                />
                            </Typography.A>
                        </div>
                    </div>
                    <p>
                        <a href="mailto:yeehanchung@gmail.com">
                            yeehanchung@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Author;
