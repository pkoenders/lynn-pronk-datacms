import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
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
        fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid_noBase64
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
        title="Lynn Pronk Portfolio"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
        <link rel="preconnect" href="https://lynn-pronk-datocms.netlify.app/"></link>
      </Helmet>
      <Header />
      <Layout >
        <PortfolioPageItem data={data} pageContext={pageContext} />
      </Layout>
    </>
  )
}
export default PortfolioPage