/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `YeeHan Chung's Personal Website`,
    description: `Yee Han's internet profile`,
    url: "https://www.yeehan.me",
    image: "./src/img/og_image.jpeg",
    facebookUsername: "chungyhan",
    author: "Yee Han Chung",
    social: {
      githubUrl: "https://github.com/cyeehan",
      linkedInUrl: "https://www.linkedin.com/in/cyeehan/",
      facebookUrl: "https://www.facebook.com/chungyhan/",
      twitterUrl: "https://twitter.com/cyee_han",
    },
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //     name: `posts`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: `img`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
              maxWidth: 1200,
              quality: 100,
            },
          },
          // Reading time
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extension: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            // Make sure image served is maximum 1200px; For Optimization.
            options: {
              maxWidth: 1200,
              quality: 100,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
