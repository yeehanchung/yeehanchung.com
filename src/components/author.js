/* --- NODE MODULES --- */
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import yeehan_img from '../img/yee-han-chung.jpeg';

/* --- STYLES --- */
import * as Typography from '../styled/Typography';
import * as styles from '../styles/author.module.scss';

export function Author({ogImage}) {
    // Data from gatsby-config.js
    const {site, linkedin, github, twitter} = useStaticQuery(graphql`
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
    let data = site.siteMetadata;

    return (
        <div className={styles.person}>
            <img
                src={ogImage ? ogImage : yeehan_img}
                alt={data.author}
                className={styles.img}
                loading="lazy"
            />
            <div className={styles.intro}>
                <div className={styles.subtitle}>
                    <h3 className={styles.name}>{data.author}</h3>
                    <p style={{marginBottom: '0.5rem'}}>{data.occupation}</p>
                    <div style={{marginBottom: '0.5rem'}}>
                        <Typography.A
                            href={data.social.githubUrl}
                            rel="noopener noreferrer"
                            target="">
                            <img
                                src={github.publicURL}
                                alt="github"
                                height="25px"
                            />
                        </Typography.A>
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
                    {/* <p>🇲🇾 +6 017 857 8815</p> */}
                    <p style={{margin: '0'}}>+65 8790 8815</p>
                    <br />
                    <p>
                        <a href="mailto:yeehanchung@gmail.com">
                            yeehanchung@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
