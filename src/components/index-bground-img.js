import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import IndexBgroundImg from "./index-bground-img.module.scss"


const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        IndexBgroundImg: file(relativePath: { eq: "img/lynn-bw-photo.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.IndexBgroundImg.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={IndexBgroundImg.staticBgroundImge}
          fluid={imageData}
        >
        </BackgroundImage>
      )
    }}
  />
)

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

export default BackgroundSection
