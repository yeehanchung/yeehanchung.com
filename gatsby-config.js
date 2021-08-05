/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
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
      githubUrl: 'https://github.com/cyeehan',
      linkedInUrl: 'https://www.linkedin.com/in/cyeehan/',
      facebookUrl: 'https://www.facebook.com/cyeehannn',
      twitterUrl: 'https://twitter.com/cyeehannn',
      instagramUrl: 'https://www.instagram.com/cyeehannn/',
      devUrl: 'https://yeehan.dev/',
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
        path: `${__dirname}/src/img`,
        name: `img`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 480,
              quality: 100,
            },
          },
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extension: [`.md`, `.mdx`],
        plugins: [`gatsby-remark-images`, `gatsby-remark-images-medium-zoom`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            // Make sure image served is maximum 1200px; For Optimization.
            options: {
              maxWidth: 480,
              maxHeight: 400,
              quality: 100,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {},
          },
        ],
      },
    },
  ],
};
