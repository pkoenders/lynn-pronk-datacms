import React from 'react'
import SimpleReactLightbox from "simple-react-lightbox"; // Import Simple React Lightbox
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper
import IndexBGroundImg from '../components/contact-bground-img'
import Layout from '../components/layout'
import Head from '../components/head'
import Header from "../components/header"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import blogStyles from './portfolio.module.scss'

const BlogPage = () => {

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
    showCaption: false,


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
            addToHomepage
            coverImage 
            {
              url
              alt
              fluid(maxWidth: 360, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
            }
          }
        }  
      }
    }
  } 
  `)

  return (

    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Head title="Home" />
      <IndexBGroundImg />
      <Header />
      <Layout>
        <SimpleReactLightbox>
          <SRLWrapper options={SLBoptions}>

            <ol id="myBlogList" className={blogStyles.posts + ' ' + 'grid'}>

              {data.allDatoCmsPortfolio.edges.map(edge => {
                return (

                  <li className={blogStyles.post + ' ' + 'item'} >
                    <Link to={`/portfolio/${edge.node.slug}`} className={'item-content'}>
                      <div className={"SlbPortfolio"} data-attribute="SRL">
                        <img
                          alt={edge.node.coverImage.alt}
                          src={edge.node.coverImage.url} />
                      </div>

                      {/* <Img
                        fluid={edge.node.coverImage.fluid}
                        alt={edge.node.coverImage.alt}
                      /> */}
                      <h2>{edge.node.title}</h2>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Layout>
    </div >
  )
}
export default BlogPage