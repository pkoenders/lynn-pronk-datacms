const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPortfolio (sort: { fields: [position], order: ASC }) {
          edges {
            node {
                slug title
                coverImage 
                {
                  url
                  alt
                 
                }
            }
            next {
              slug
              title
              coverImage {
                url
                alt
              }
            }
            previous {
              slug
              title
              coverImage {
                url
                alt
              }
            }
          }
        }
      }
      `).then(results => {
      // console.log(results)
      if (results.error) {
        reject(results.error)
      }

      const portfolioItems = results.data.allDatoCmsPortfolio.edges
      portfolioItems.forEach((portfolioItem, index) => {
        const next = index === portfolioItems.length - 1 ? null : portfolioItems[index + 1].node
        const previous = index === 0 ? null : portfolioItems[index - 1].node
        const thisPortfolioItem = portfolioItem

        createPage({
          thisPortfolioItem,
          path: `/portfolio/${portfolioItem.node.slug}`,
          //component: path.resolve(`./src/templates/portfolio.js`),

          component: path.resolve(`./src/templates/portfolio-alt.js`),

          context: {
            slug: portfolioItem.node.slug,
            pathItem: thisPortfolioItem,
            previous,
            next
            // prev: index === 0 ? null : work[index - 1].node,
            // next: index === (work.length - 1) ? null : work[index + 1].node,
          },
        })

      })
    }).then(resolve)
  })
}