import React from 'react'
import IndexBGroundImg from '../components/contact-bground-img'
import Layout from '../components/layout'
import Head from '../components/head'
import Header from "../components/header"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import blogStyles from './portfolio.module.scss'

const BlogPage = () => {
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


        <ol id="myBlogList" className={blogStyles.posts + ' ' + 'grid'}>
          {data.allDatoCmsPortfolio.edges.map(edge => {
            return (

              <li className={blogStyles.post + ' ' + 'item'} >
                <Link to={`/portfolio/${edge.node.slug}`} className={'item-content'}>
                  <Img
                    fluid={edge.node.coverImage.fluid}
                    alt={edge.node.coverImage.alt}
                    src={edge.node.coverImage.url}
                  />
                  <h2>{edge.node.title}</h2>

                  {/* <img alt={edge.node.imagePreview.title} src={edge.node.imagePreview.file.url} /> */}
                  {/* <p>{edge.node.PublishedDate}</p> */}
                </Link>
              </li>



            )
          })}
        </ol>


      </Layout>
    </div >
  )
}
export default BlogPage