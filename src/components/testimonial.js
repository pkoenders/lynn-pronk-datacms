import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import aboutStyles from '../pages/about.module.scss'

const Testimonial = () => {
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
            fluid(maxWidth: 128, imgixParams: { fm: "jpg", q: 75 }) {
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
                return (
                    <>
                        {edge.node.linkToGalleryItem
                            ? <div className={aboutStyles.testimonial} style={{ color: edge.node.chooseColour.hex }}
                                key={i}
                                data-sal="fade"
                                data-sal-duration="300"
                                data-sal-easing="ease">

                                <Link
                                    to={`/gallery/${edge.node.linkToGalleryItem.slug}`}
                                    title={edge.node.linkToGalleryItem.title}
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
                            : <div className={aboutStyles.testimonial} style={{ color: edge.node.chooseColour.hex }}
                                key={i}
                                data-sal="fade"
                                data-sal-duration="300"
                                data-sal-easing="ease">

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
                        }
                    </>
                )
            })}
        </>
    )
}

export default Testimonial