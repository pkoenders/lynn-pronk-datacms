import React from 'react'
import { Link } from 'gatsby'
import blogStyles from '../pages/portfolio.module.scss'
import Img from 'gatsby-image'
import DimensionsIcon from '../img/svg/dimensions.inline.svg'



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
              to={`/gallery/${previous.slug}`} className={blogStyles.previous}
            >
              <div>
                <img

                  //fixed={previous.coverImage.fixed}
                  alt={previous.coverImage.alt}
                  src={previous.coverImage.url + '?auto=format&w=80'}
                  width='80px'
                  height='auto'
                  data-attribute='mediumZoom'
                />
              </div>
              <span>Previous</span>
            </Link>
          }

          {next &&
            <Link
              to={`/gallery/${next.slug}`} className={blogStyles.next}
            >
              <div>
                <img
                  alt={next.coverImage.alt}
                  src={next.coverImage.url + '?auto=format&w=80'}
                  width='90px'
                  height='auto'
                />
              </div>
              <span>Next</span>
            </Link>
          }
        </div>

        <div className={blogStyles.portfolioPage}>

          <Img className={blogStyles.coverImage + ' medium-zoom-image'}
            width='100%'
            fluid={data.datoCmsPortfolio.coverImage.fluid}
            alt={data.datoCmsPortfolio.coverImage.alt}
            src={data.datoCmsPortfolio.coverImage.url}
          ></Img>


          <div className={blogStyles.itemSizing}>
            <div>
              <p className={blogStyles.year}><span>{data.datoCmsPortfolio.dateYear}</span></p>
            </div>
            <DimensionsIcon />
            <div>
              <p><span>W</span><span>{data.datoCmsPortfolio.artworkWidth + ' cm'}</span></p>
              <p><span>H</span><span>{data.datoCmsPortfolio.artworkHeight + ' cm'}</span></p>
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