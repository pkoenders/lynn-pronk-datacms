import React, { } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import blogStyles from '../pages/portfolio.module.scss'
import IconEnlarge from '../img/svg/icon-enlarge.inline.svg'
import IconArrowRight from '../img/svg/icon-arrow-right.inline.svg'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from 'simple-react-lightbox'


const lightBoxOptions = {
  settings: {
    overlayColor: '#0b1f35e8',
    disablePanzoom: false,
    hideControlsAfter: false,
    slideAnimationType: 'slide',
    slideSpringValues: [250, 500],
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
            
            coverImage {
              fluid(maxWidth: 90, imgixParams: { fm: "jpg", q: 30 }) {
                ...GatsbyDatoCmsFluid
              }
              url
              alt                
            }

          }

          previous {
            slug
            title
            coverImage {
              fluid(maxWidth: 90, imgixParams: { fm: "jpg", q: 30 }) {
                ...GatsbyDatoCmsFluid
              }
              url
              alt                
            }
          }

          node {
            dateYear
            title
            slug
            category
            coverImage {
              url
              alt
              fluid(maxWidth: 414, imgixParams: { fm: "jpg", q: 50 }) {
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
          <ol id="myBlogList" className={blogStyles.posts + " grid"}>

            {/* <GalleryFilter updateFilterClick={updateFilter} /> */}

            {data.allDatoCmsPortfolio.edges.map((edge, i) => {
              //console.log(edge, i)
              const categoryItem = edge.node.category

              //const SLBcustomCaption = `<a href="/gallery/${edge.node.slug} class="SRLCustomCaption myCustomButton">'${edge.node.title}'</a>`

              if (
                categoryItem.some(el => categoryFilter.includes(el))
                ||
                categoryFilter === "all"
              ) {
                return (
                  <li
                    className={blogStyles.post + " item"}
                    key={i}
                    data-sal="fade"
                    data-sal-duration="300"
                    data-sal-easing="ease">

                    <div
                      className={"item-content"}
                    >
                      <Img
                        //width='100%'
                        fluid={edge.node.coverImage.fluid}
                        alt={edge.node.coverImage.alt}
                        //src={edge.node.coverImage.url}
                        loading="lazy"
                        data-attribute='SRL'
                        data-src={edge.node.coverImage.url}
                        className={"lazyload"}
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
              } else {
                return false
              }
            })}
          </ol>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  )
}

export default Gallery