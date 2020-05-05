import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import ContactBgroundImg from "./contact-bground-img.module.scss"


const ContactBackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        ContactBgroundImg: file(relativePath: { eq: "img/lynn-bw-photo-alt.jpg" }) {
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
      const imageData = data.ContactBgroundImg.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={ContactBgroundImg.staticBgroundImge}
          fluid={imageData}
        >
        </BackgroundImage>
      )
    }}
  />
)

export default ContactBackgroundSection
