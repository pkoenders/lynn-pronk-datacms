import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import aboutStyles from '../pages/about.module.scss'


const Testimonial = () => {

    let linkToItem

    const data = useStaticQuery(graphql`
    query {
      allDatoCmsTestimonial(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          chooseColour {
            hex
          }
          dateOfTestmonial(difference: "", formatString: "MMMM YYYY", fromNow: false, locale: "")
          name
          testmonial
          linkToGalleryItem {
            slug
          }
          addArtwork {
            url
            alt
            fluid(
              maxWidth: 120
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

    return (
        <>
            {data.allDatoCmsTestimonial.edges.map((edge, i) => {

                linkToItem = edge.node.linkToGalleryItem


                if (linkToItem === null) {
                    return (
                        <div className={aboutStyles.testimonial} style={{ color: edge.node.chooseColour.hex }}>
                            {edge.node.addArtwork &&
                                <div className={aboutStyles.testimonialImgWrapper}>
                                    <Img
                                        fluid={edge.node.addArtwork.fluid}
                                        alt={edge.node.addArtwork.alt}
                                        src={edge.node.addArtwork.url}
                                    ></Img>
                                </div>
                            }

                            <p className={aboutStyles.testimonialQuote}>
                                {edge.node.testmonial}&nbsp;
                            </p>
                            <p><strong>{edge.node.name}</strong> - <span>{edge.node.dateOfTestmonial}</span></p>
                        </div>
                    )
                }

                if (linkToItem != null) {
                    return (

                        <div className={aboutStyles.testimonial} style={{ color: edge.node.chooseColour.hex }}>

                            <Link
                                to={`/gallery/${linkToItem.slug}`}
                                title={linkToItem.title}
                            >
                                {edge.node.addArtwork &&
                                    <div className={aboutStyles.testimonialImgWrapper}>
                                        <Img
                                            fluid={edge.node.addArtwork.fluid}
                                            alt={edge.node.addArtwork.alt}
                                            src={edge.node.addArtwork.url}
                                        ></Img>
                                    </div>
                                }

                                <p className={aboutStyles.testimonialQuote}>
                                    {edge.node.testmonial}&nbsp;
                                </p>
                                <p className={aboutStyles.link}><strong>{edge.node.name}</strong> - <span>{edge.node.dateOfTestmonial}</span></p>
                            </Link>

                        </div>
                    )

                }

            })}
        </ >
    )

}

export default Testimonial