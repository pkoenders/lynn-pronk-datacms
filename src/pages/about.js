import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'


export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "img/lynn-photo.jpg" }) {
      ...fluidImage
    }
    image2: file(relativePath: { eq: "img/mikkis-magic-day.jpg" }) {
      ...fluidImage
    }

    datoCmsAboutMe {
      title
      bio
      howToCommissionAPortrait
      photo {
        url
        alt
        fluid(
          maxWidth: 515
          imgixParams: { fm: "jpg", auto: "compress" }
          ) 
          {
            ...GatsbyDatoCmsFluid
          }
        }
      seoSettings {
        description
        title
      }
    }
  }
`;



const AboutPage = (props) => {

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{props.data.datoCmsAboutMe.seoSettings.title}</title>
        <meta name="description" content={props.data.datoCmsAboutMe.seoSettings.description} />
      </Helmet>

      <Layout>
        <div className={aboutStyles.aboutWrapper}>
          <h2>{props.data.datoCmsAboutMe.title}</h2>
          <div className={aboutStyles.aboutContent}>
            <div dangerouslySetInnerHTML={{ __html: props.data.datoCmsAboutMe.bio }} />

            <span className={aboutStyles.imgWrapper}>
              <Img
                alt={props.data.datoCmsAboutMe.photo.alt}
                fluid={props.data.datoCmsAboutMe.photo.fluid}
              />
            </span>

            <div dangerouslySetInnerHTML={{ __html: props.data.datoCmsAboutMe.howToCommissionAPortrait }} />
          </div>
        </div>
      </Layout >
    </>
  )
}

export default AboutPage