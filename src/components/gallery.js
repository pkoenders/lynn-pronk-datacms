import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
//import LightBox from "./lightbox"
//import updateFilter from "./gallery-container"
import Img from "gatsby-image"
import blogStyles from "../pages/portfolio.module.scss"
import IconEnlarge from "../img/svg/icon-enlarge.inline.svg"
import IconArrowRight from "../img/svg/icon-arrow-right.inline.svg"



import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";



//import GalleryFilter from "./gallery-filter"

//const Gallery = (props) => {





const lightBoxOptions = {
  settings: {
    overlayColor: "#0b1f35e8",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    disablePanzoom: false,
    hideControlsAfter: false,
    slideAnimationType: "slide",
    slideSpringValues: [300, 200],
  },
  buttons: {
    backgroundColor: "#0b1f35e8",
    iconColor: "#ffffff",
    size: '42px',

    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
  },
  caption: {
    showCaption: false,
    captionColor: "#ffffff",

  }
};




function Gallery({ categoryFilter }) {







  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpen = i => e => {
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length)
  }

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
                      >
                        <Link
                          to={`/gallery/${edge.node.slug}`}
                          className={"item-content"}
                        >
                          {edge.node.title}
                        </Link>


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