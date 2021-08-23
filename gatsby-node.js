/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { Component } = require('react');

// You can delete this file if you're not using it

// https://www.gatsbyjs.com/tutorial/part-seven/#creating-slugs-for-pages
exports.createPages = async function ({ actions, graphql }) {
  // const { createPage } = actions;

  const { data } = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          fileAbsolutePath: { regex: "/content/" }
          frontmatter: { slug: { ne: "resume" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
              lastEdited
              excerpt
            }
            id
            fields {
              readingTime {
                text
              }
            }
          }
        }
      }
    }
  `);
  // filter: { fileAbsolutePath: { regex: "/blog/" } }
  // in: ["blog-post", "repo-post"]
  // Create paginated pages for posts

  // data.allMdx.edges.forEach((edge) => {
  //   const slug = edge.node.frontmatter.slug
  //   const id = edge.node.id
  //   actions.createPage({
  //     // Fist item in array (page becomes 2 if exist)
  //     path: `/blog/`,
  //     component: require.resolve(`./src/templates/allPosts.jsx`),
  //     context: { id },
  //   })
  // })

  // Create single blog post
  // const posts = data.allMdx.edges.node

  if (data.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create tech pages
  const pages = data.allMarkdownRemark.edges;

  pages.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    // const previousPostId = index === 0 ? null : edge[index - 1].id
    // const readingTime = edge.node.fields.readingTime.text
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: { id },
    });
  });

  // Create blog pages
  // const blogNotes = data.blogPage.edges;

  // blogNotes.forEach((edge) => {
  //   const slug = edge.node.frontmatter.slug;
  //   const id = edge.node.id;
  //   // const previousPostId = index === 0 ? null : edge[index - 1].id
  //   // const readingTime = edge.node.fields.readingTime.text
  //   actions.createPage({
  //     path: `/${slug}`,
  //     component: require.resolve(`./src/templates/singlePost.js`),
  //     context: { id },
  //   });
  // });

  // Create blog page
  // actions.createPage({
  //   path: "/my-resume",
  //   component: require.resolve(`./src/templates/singlePost.js`),
  //   context: { id },
  // })
  // action.createPage({
  //   path: "/",
  //   component: require.resolve("./src/pages/home"),
  //   context: { id, readingTime },
  // })
  // action.createPages('/src/pages/resume/', './src/pages/resume.js');
  // Create resume page
};
