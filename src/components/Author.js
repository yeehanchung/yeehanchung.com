import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as Typography from '../styled/Typography';
import styles from '../styles/author.module.scss';
import yeehan_img from '../img/yee-han-chung.jpeg';

export function Author() {
  // Data from gatsby-config.js
  const { site } = useStaticQuery(graphql`
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
            devUrl
          }
        }
      }
    }
  `);
  let data = site.siteMetadata;

  return (
    <div className={styles.person}>
      <img
        src={yeehan_img}
        alt={data.author}
        className={styles.img}
        loading="lazy"
      />
      <div className={styles.intro}>
        <div className={styles.subtitle}>
          <h3 className={styles.name}>{data.author}</h3>
          <p style={{ marginBottom: '0.5rem' }}>{data.occupation}</p>
          <div style={{ marginBottom: '0.5rem' }}>
            <Typography.A
              href={data.social.githubUrl}
              rel="noopener noreferrer"
              target="">
              GitHub
            </Typography.A>
            |
            <Typography.A
              href={data.social.linkedInUrl}
              rel="noopener noreferrer"
              target="">
              LinkedIn
            </Typography.A>
            |
            <Typography.A
              href={data.social.devUrl}
              rel="noopener noreferrer"
              target="">
              yeehan.dev
            </Typography.A>
          </div>
          {/* <p>🇲🇾 +6 017 857 8815</p>
          <p>🇸🇬 +65 8790 8815</p> */}
        </div>
      </div>
    </div>
  );
}
