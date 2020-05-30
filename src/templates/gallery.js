import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PortfolioPageItem from './gallery-item'

export const query = graphql`
  query($slug: String!) {
    datoCmsPortfolio(slug: { eq: $slug }) {
      slug
      title
      dateYear
      coverImage
        {
        url
        title
        alt
       
        fluid(
          maxWidth: 680
          imgixParams: { fm: "jpg", auto: "compress" }
        ) {
          ...GatsbyDatoCmsFluid
        }
        
      }
      
      description
      artworkWidth
      artworkHeight
      medium

      seoSettings {
        title
        description
      }
    }
  } 
`

const PortfolioPage = ({ data, pageContext }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{data.datoCmsPortfolio.title}</title>
        <meta name="description" content={data.datoCmsPortfolio.seoSettings.description} />
        {/* <meta name="keywords" content={ data.datoCmsPortfolio.seoSettings.description } /> */}
        <link
          rel="preconnect"
          href="https://lynn-pronk-datocms.netlify.app/"
        ></link>
        <link
          rel="preconnect"
          href="https://www.datocms-assets.com/26318/"
        ></link>
      </Helmet>

      <Layout >
        <PortfolioPageItem data={data} pageContext={pageContext} />
      </Layout>
    </>
  )
}
export default PortfolioPage