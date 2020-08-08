import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import blogStyles from '../pages/portfolio.module.scss'
import Img from 'gatsby-image'
import DimensionsIcon from '../img/svg/dimensions.inline.svg'
import EnlargeIcon from '../img/svg/icon-enlarge-alt.inline.svg'
import mediumZoom from 'medium-zoom'



const PortfolioPageItem = ({ data, pageContext }) => {

  const Metadata = useStaticQuery(graphql`
  query projectsData {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  //console.log(pageContext)

  //mediumZoom('.medium-zoom-image picture img')

  //const myTrigger = document.querySelector('.zoom-trigger')
  // myTrigger.addEventListener('click', () => zoom.open())
  function handleClickZoom(e) {
    e.preventDefault();
    const ZoomImg = mediumZoom('.medium-zoom-image picture img')
    ZoomImg.open()
  }


  const { next, previous } = pageContext

  return (
    <>

      <Helmet data={data}>
        <html lang="en" />
        <title>{data.datoCmsPortfolio.title} - Gallery | {Metadata.site.siteMetadata.title}</title>
        <meta name="description" content={data.datoCmsPortfolio.description} />
      </Helmet>
      <div className={blogStyles.portfolioPageWrapper}>
        <h2>{data.datoCmsPortfolio.title}</h2>

        <div className={blogStyles.portfolioNav}>
          {previous &&
            <Link
              to={`/gallery/${previous.slug}`} className={blogStyles.previous}
            >

              <Img

                //fixed={previous.coverImage.fixed}
                alt={previous.coverImage.alt}
                //src={previous.coverImage.url + '?auto=format&w=80'}
                //src={previous.coverImage.url}
                fluid={previous.coverImage.fluid}
                width='40px'
                //height='auto'
                loading="lazy"

              />

              <span>Previous</span>
            </Link>
          }

          {next &&
            <Link
              to={`/gallery/${next.slug}`} className={blogStyles.next}
            >

              <Img
                alt={next.coverImage.alt}
                //src={next.coverImage.url + '?auto=format&w=80'}
                //src={next.coverImage.url}
                fluid={next.coverImage.fluid}
                width='40px'
                //height='auto'
                loading="lazy"
              />

              <span>Next</span>
            </Link>
          }
        </div>

        <div className={blogStyles.portfolioPage}>
          <EnlargeIcon className={blogStyles.zoomCoverImage} onClick={handleClickZoom} title="Click to zoom in main image" alt="Icon - Click to zoom in main image" />
          <Img className={blogStyles.coverImage + ' medium-zoom-image'}
            //width='100%'
            fluid={data.datoCmsPortfolio.coverImage.fluid}
            alt={data.datoCmsPortfolio.coverImage.alt}
          //src={data.datoCmsPortfolio.coverImage.url}
          //data-attribute='mediumZoom'
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