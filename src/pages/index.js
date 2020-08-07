import React, { } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import GalleryContainer from '../components/gallery-container'

const HomePage = props => {

  const data = useStaticQuery(graphql`
    query IndexData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Welcome to my portrait gallery | {data.site.siteMetadata.title}</title>
        <meta name="description" content="Welcom to the galley of Lynn Pronk Portraits. A portraiture artist living in Auckland, New Zealand and open to new commissions for portrait art." />
      </Helmet>
      <Layout>
        <GalleryContainer />
      </Layout>
    </>
  )
}
export default HomePage