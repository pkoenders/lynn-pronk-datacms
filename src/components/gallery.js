import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import blogStyles from "../pages/portfolio.module.scss"
import IconEnlarge from "../img/svg/icon-enlarge.inline.svg"
import IconArrowRight from "../img/svg/icon-arrow-right.inline.svg"



import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";



const lightBoxOptions = {
  settings: {
    overlayColor: '#0b1f35e8',
    disablePanzoom: false,
    hideControlsAfter: false,
    slideAnimationType: 'slide',
    slideSpringValues: [300, 200],
    slideTransitionTimingFunction: 'easeIn',
  },
  buttons: {
    backgroundColor: '#0b1f35e8',
    iconColor: '#ffffff',
    size: '42px',

    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,

  },
  caption: {
    showCaption: false,
    captionColor: '#ffffff',

  }
};

function Gallery({ categoryFilter }) {

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolio(sort: { fields: [position], order: ASC }) {
        edges {
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
          node {
            dateYear
            title
            slug
            category
            coverImage {
              url
              alt

              fluid(
                maxWidth: 515
                imgixParams: { fm: "jpg", auto: "compress" }
              ) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    }
  `)

  //categoryFilter = categoryFilter // Recieved from container
  //console.log("current categoryFilter = " + categoryFilter)

  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper options={lightBoxOptions}>
          {/* <GalleryFilter updateFilterClick={updateFilter} /> */}
          <ol id="myBlogList" className={blogStyles.posts + " " + "grid"}>
            {data.allDatoCmsPortfolio.edges.map((edge, i) => {
              const images = data.allDatoCmsPortfolio.edges
              const categoryItem = edge.node.category

              if (
                categoryItem.some(el => categoryFilter.includes(el))
                ||
                categoryFilter === "all"
              ) {
                return (


                  <li className={blogStyles.post + " " + "item"}>
                    <div
                      className={"item-content"}
                    >
                      <Img
                        fluid={edge.node.coverImage.fluid}
                        alt={edge.node.coverImage.alt}
                        src={edge.node.coverImage.url}
                      // href={`/gallery/${edge.node.slug}`}
                      >

                      </Img>

                      <span className={"enlarge"}><IconEnlarge /></span>

                      <Link
                        to={`/gallery/${edge.node.slug}`}
                        className={"item-content"}
                      >

                        <h2>
                          {edge.node.title}
                          <IconArrowRight />
                        </h2>
                      </Link>
                    </div>
                  </li>

                )
              }
            })}

          </ol>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  )
}

export default Gallery