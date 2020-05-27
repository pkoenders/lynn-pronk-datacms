import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Head from '../components/head'
import Layout from '../components/layout'
import Header from '../components/header'
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
    }
  } 
`

const PortfolioPage = ({ data, pageContext }) => {
  return (
    <>
      <Helmet
        meta={[
          {
            rel: "preconnect",
            href: "https://lynn-pronk-datocms.netlify.app/",
          },
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      >
        <html lang="en" />
        <link
          rel="preconnect"
          href="https://lynn-pronk-datocms.netlify.app/"
        ></link>

        <link
          rel="preconnect"
          href="https://www.datocms-assets.com/26318/"
        ></link>
      </Helmet>
      <Head title={data.datoCmsPortfolio.title} />

      <Header />
      <Layout >
        <PortfolioPageItem data={data} pageContext={pageContext} />
      </Layout>
    </>
  )
}
export default PortfolioPage