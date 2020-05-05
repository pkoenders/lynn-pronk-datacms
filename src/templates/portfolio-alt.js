import React from 'react'
import IndexBGroundImg from '../components/contact-bground-img'
import { Link, graphql } from 'gatsby'
import blogStyles from '../pages/portfolio.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import Header from "../components/header"
import Img from 'gatsby-image'
import DimensionsIcon from "../img/svg/dimensions.svg"



export const query = graphql`
  query($slug: String!) {
    datoCmsPortfolio(slug: { eq: $slug }) {
      slug
      title
      coverImage
        {
        url
        title
        alt
        fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
        
      }
      
      description
      artworkWidth
      artworkHeight
    }
  } 
`

const PortfolioPage = ({ data, pageContext }) => {
  console.log(pageContext)
  const { next, previous } = pageContext

  return (


    < div >
      {/* <IndexBGroundImg /> */}
      <Header />
      <Layout >

        <Head title={data.datoCmsPortfolio.title} />






        <div className={blogStyles.portfolioPageWrapper}>
          <h2>{data.datoCmsPortfolio.title}</h2>

          <div className={blogStyles.portfolioNav}>
            {previous &&
              <Link to={'portfolio/' + previous.slug} className={blogStyles.previous}>
                <div>
                  <img
                    alt={previous.coverImage.alt}
                    src={previous.coverImage.url}
                  />
                </div>
                <span>Previous</span>
              </Link>
            }

            {next &&
              <Link to={'portfolio/' + next.slug} className={blogStyles.next}>
                <div>
                  <img
                    alt={next.coverImage.alt}
                    src={next.coverImage.url}
                  />
                </div>
                <span>Next</span>
              </Link>
            }
          </div>


          <div className={blogStyles.portfolioContent}>
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsPortfolio.description }} />
          </div>


          <div className={blogStyles.portfolioPage}>
            <Img className={blogStyles.coverImage + ' ' + 'mediumZoomImage'}
              fluid={data.datoCmsPortfolio.coverImage.fluid}
              alt={data.datoCmsPortfolio.coverImage.alt}
              src={data.datoCmsPortfolio.coverImage.url}
            />

            <div className={blogStyles.itemSizing}>
              <DimensionsIcon />
              <div>
                <p><span>W</span><span>{data.datoCmsPortfolio.artworkWidth + " cm"}</span></p>
                <p><span>H</span><span>{data.datoCmsPortfolio.artworkHeight + " cm"}</span></p>
              </div>
            </div>



          </div>






        </div >
      </Layout >
    </div >
  )
}

export default PortfolioPage