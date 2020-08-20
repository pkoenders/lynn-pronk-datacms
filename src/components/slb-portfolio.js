import React from 'react'
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper
import { useStaticQuery, graphql } from 'gatsby'

function SlbPortfolio() {
  const SLBoptions = {
    overlayColor: "#dad8d8",
    captionColor: "#000000cf",
    captionFontFamily: "",
    captionFontSize: "1.2rem",
    captionFontWeight: "",
    captionFontStyle: "capitalize",
    buttonsBackgroundColor: "#000000cf",
    buttonsIconColor: "#dad8d8",
    autoplaySpeed: 0,
    transitionSpeed: 900,
    hideControlsAfter: false,
    showThumbnails: false,
    enablePanzoom: false,
    autoplaySpeed: 0,
    showDownloadButton: false,

  };

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolio (sort: { fields: [position], order: ASC }) {
      edges 
        {
          next {
            slug
            title
          }
           previous {
            slug
            title
          }
        node
          {
            

            title
            slug
            coverImage 
            {
              url
              alt
              fluid(maxWidth: 510, imgixParams: { fm: "withWebp", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
            }
          }
        }  
      }
    }
  } 
  `)
  return (

    data.allDatoCmsPortfolio.edges.map(edge => {
      return (
        <div>
          <SRLWrapper options={SLBoptions}>
            <div className={"SlbPortfolio"} >

              <img
                alt={edge.node.coverImage.alt}
                src={edge.node.coverImage.url} />
            </div>
          </SRLWrapper>
        </div>
      )
    })
  )
}

export default SlbPortfolio;