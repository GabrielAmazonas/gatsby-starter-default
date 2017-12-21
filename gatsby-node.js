const path = require('path')
exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      const blogPostTemplate = path.resolve(`src/templates/post.js`)
      // Query for markdown nodes to use in creating pages.
      resolve(
        graphql(
            `
            {
              allMarkdownRemark(limit: 1000) {
                edges {
                  node {
                    html 
                    id
                    frontmatter {
                        path
                        title
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
  
          // Create blog post pages.
          result.data.allMarkdownRemark.edges.forEach(({node}) => {
              createPage({
                path: `${node.frontmatter.path}`, // required
                component: blogPostTemplate,
                // context: {
                //   slug: edge.node.fields.slug,
                // },
              })
          })
  
          return
        })
      )
    })
  }