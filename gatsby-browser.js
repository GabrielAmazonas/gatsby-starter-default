/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * `
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
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // You can delete this file if you're not using it