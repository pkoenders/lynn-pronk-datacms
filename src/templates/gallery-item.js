import React from 'react'
import { Link } from 'gatsby'
import blogStyles from '../pages/portfolio.module.scss'
import Img from 'gatsby-image'
import DimensionsIcon from "../img/svg/dimensions.svg"

const PortfolioPageItem = ({ data, pageContext }) => {
  //console.log(pageContext)
  const { next, previous } = pageContext
  return (
    <>
      <div className={blogStyles.portfolioPageWrapper}>
        <h2>{data.datoCmsPortfolio.title}</h2>

        <div className={blogStyles.portfolioNav}>
          {previous &&
            <Link
              to={'gallery/' + previous.slug} className={blogStyles.previous}
            >
              <div>
                <img
                  alt={previous.coverImage.alt}
                  src={previous.coverImage.url}
                  width={'80px'}
                  height={'auto'}
                />
              </div>
              <span>Previous</span>
            </Link>
          }

          {next &&
            <Link
              to={'gallery/' + next.slug} className={blogStyles.next}
            >
              <div>
                <img
                  alt={next.coverImage.alt}
                  src={next.coverImage.url}
                  width={'80px'}
                  height={'auto'}
                />
              </div>
              <span>Next</span>
            </Link>
          }
        </div>

        <div className={blogStyles.portfolioPage}>
          <Img className={blogStyles.coverImage + ' ' + 'mediumZoomImage' + ' ' + 'test'}
            fluid={data.datoCmsPortfolio.coverImage.fluid}
            alt={data.datoCmsPortfolio.coverImage.alt}
            src={data.datoCmsPortfolio.coverImage.url}
          />

          <div className={blogStyles.itemSizing}>
            <div>
              <p className={blogStyles.year}><span>{data.datoCmsPortfolio.dateYear}</span></p>
            </div>
            <DimensionsIcon />
            <div>
              <p><span>W</span><span>{data.datoCmsPortfolio.artworkWidth + " cm"}</span></p>
              <p><span>H</span><span>{data.datoCmsPortfolio.artworkHeight + " cm"}</span></p>
            </div>

          </div>
          <p className={blogStyles.medium}>{data.datoCmsPortfolio.medium}</p>
        </div>

        <div className={blogStyles.portfolioContent}>
          <div dangerouslySetInnerHTML={{ __html: data.datoCmsPortfolio.description }} />
        </div>
      </div >
    </>
  )
}
export default PortfolioPageItem