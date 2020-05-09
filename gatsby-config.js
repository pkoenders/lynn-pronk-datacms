/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Lynn Pronk - DatoCMS",
    author: "Peter Koenders",
    year: "2020",
  },

  plugins: [

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lynn Pronk Portfolio`,
        short_name: `Lynn Pronk`,
        start_url: `/`,
        background_color: `#2B2B2B`,
        theme_color: `#2B2B2B`,
        icon: `src/img/favico.png`,
        display: `standalone`,
      },
    },


    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },

    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `4b1f573b84fbcdb0a5e5e7ca8858e1`,
        preview: false,
        disableLiveReload: false,
      },
    },

    `gatsby-plugin-react-helmet`,

    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },

    "gatsby-plugin-sass",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },

          {
            resolve: `gatsby-remark-images-medium-zoom`, // point!
            options: {
              //...
            }
          },

        ],
      },
    },

    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     //src: "/sticky-header.js",
    //   },
    // },
  ],
}
