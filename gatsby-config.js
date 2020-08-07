/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Lynn Pronk Portraits",
    description: `Gallery | Lynn Pronk Portraits`,
    author: "Peter Koenders",
    year: "2020",
  },

  plugins: [



    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Spectral:400,700', 'Roboto:400,700', 'Roboto Slab:400,700']
    //     }
    //   }
    // },


    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-7623107-5",
      },
    },


    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variable: true,
            weights: [`400..700`],
          },
          {
            family: `Roboto Slab`,
            variable: true,
            weights: [`400..700`],
          },
          {
            family: `Spectral`,
            variable: true,
            weights: [`400..700`],
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: .25, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        //enterEventName: 'sal:in', // Enter event name
        //exitEventName: 'sal:out', // Exit event name
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lynn Pronk Portfolio`,
        short_name: `Lynn Pronk`,
        start_url: `/`,
        background_color: `#2B2B2B`,
        theme_color: `#2B2B2B`,
        icon: `src/img/favicon.png`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline',


    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
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

    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       "gatsby-remark-relative-images",
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 680,
    //           linkImagesToOriginal: false,
    //         },
    //       },

    //       {
    //         resolve: `gatsby-remark-images-medium-zoom`, // point!
    //         options: {
    //           //...
    //         }
    //       },

    //     ],
    //   },
    // },

    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     //src: "/sticky-header.js",
    //   },
    // },
  ],
}
