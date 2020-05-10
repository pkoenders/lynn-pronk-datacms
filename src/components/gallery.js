import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import LightBox from "./lightbox"
//import updateFilter from "./gallery-container"
import Img from "gatsby-image"
import blogStyles from "../pages/portfolio.module.scss"
import IconEnlarge from "../img/svg/icon-enlarge.svg"
import IconArrowRight from "../img/svg/icon-arrow-right.svg"
import sal from 'sal.js'


//import GalleryFilter from "./gallery-filter"

//const Gallery = (props) => {





function Gallery({ categoryFilter }) {

  sal();

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
                {showLightbox && selectedImage !== null && (
                  <LightBox
                    images={images}
                    handleClose={handleClose}
                    handleNextRequest={handleNextRequest}
                    handlePrevRequest={handlePrevRequest}
                    selectedImage={selectedImage}
                  />
                )}

                <div
                  className={"item-content"}
                  onClick={handleOpen(i)} key={i}
                  data-sal="fade"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                >
                  <Img
                    fluid={edge.node.coverImage.fluid}
                    alt={edge.node.coverImage.alt}
                    src={edge.node.coverImage.url}
                  ></Img>

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
    </>
  )
}

export default Gallery
