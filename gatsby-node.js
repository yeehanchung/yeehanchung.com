/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/* --- NODE MODULES --- */
const path = require("path");

// https://www.gatsbyjs.com/tutorial/part-seven/#creating-slugs-for-pages
exports.createPages = async function ({ actions, graphql }) {

    const { data } = await graphql(`
        {
            allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                filter: {
                    fileAbsolutePath: {regex: "/content/"}
                    frontmatter: {slug: {nin: ["about", "credits"]}}
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
    if (data.errors) {
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }

    // Create tech pages
    const pages = data.allMarkdownRemark.edges;

    pages.forEach((edge) => {
        const slug = edge.node.frontmatter.slug;
        const id = edge.node.id;
        actions.createPage({
            path:      `/${slug}`,
            component: require.resolve("./src/templates/SinglePost.tsx"),
            context:   { id },
        });
    });
};

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components":    path.resolve(__dirname, "src/components"),
                "@design-system": path.resolve(__dirname, "src/design-system"),
                "@images":        path.resolve(__dirname, "src/img"),
                "@styles":        path.resolve(__dirname, "src/styles"),
                "@utils":         path.resolve(__dirname, "src/utils"),
                "@context":       path.resolve(__dirname, "src/context"),
            }
        }
    });
};


