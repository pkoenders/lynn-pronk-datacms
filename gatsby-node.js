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
                slug
                title
                dateYear
                coverImage {
                  fluid(maxWidth: 680, imgixParams: { fm: "jpg", q: 75 }) {
                    src
                  }
                  url
                  alt
                }
              }
            next {
              slug
              title
              coverImage {
                fluid(maxWidth: 40, imgixParams: { fm: "jpg", q: 30 }) {
                  src
                }
                url
                alt
              }
            }
            previous {
              slug
              title
              coverImage {
                fluid(maxWidth: 40, imgixParams: { fm: "jpg", q: 30 }) {
                  src
                }
                url
                alt                
              }
            }
          }
        }
      }
      `).then(results => {
      console.log(results)
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
          path: `/gallery/${portfolioItem.node.slug}`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: portfolioItem.node.slug,
            pathItem: thisPortfolioItem,

            previous,
            next,

            // nextImgSrc: next.coverImage.url,
            //previousImgSrc: previous.coverImage.fixed.src

            // prev: index === 0 ? null : work[index - 1].node,
            // next: index === (work.length - 1) ? null : work[index + 1].node,
          },
        })

      })
    }).then(resolve)
  })
}