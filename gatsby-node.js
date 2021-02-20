/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { Component } = require("react")

// You can delete this file if you're not using it

// https://www.gatsbyjs.com/tutorial/part-seven/#creating-slugs-for-pages
exports.createPages = async function ({ actions, graphql }) {
  // const { createPage } = actions;

  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
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
  `)
  // Create paginated pages for posts
  // Round up number
  // const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage)
  // comma to ignore (1st) and index (2nd)
  data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    // const previousPostId = index === 0 ? null : edge[index - 1].id
    // const readingTime = edge.node.fields.readingTime.text
    actions.createPage({
      path: `/blog`,
      component: require.resolve(`./src/templates/allPosts.jsx`),
      context: { id },
    })
  })

  // Create single blog post
  // const posts = data.allMdx.edges.node

  data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    // const previousPostId = index === 0 ? null : edge[index - 1].id
    // const readingTime = edge.node.fields.readingTime.text
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: { id },
    })
  })

  // Create blog page
  // actions.createPage({
  //   path: "/my-resume",
  //   component: require.resolve(`./src/templates/singlePost.js`),
  //   context: {id, readingTime}
  // })
  // action.createPage({
  //   path: "/",
  //   component: require.resolve("./src/pages/home"),
  //   context: {id, readingTime}
  // })
  // action.createPages('/src/pages/resume/', './src/pages/resume.js');
  // Create resume page
}
