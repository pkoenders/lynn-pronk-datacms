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
        <title>Childrens and adult portrait Artist - Welcome to my portrait gallery | {data.site.siteMetadata.title}</title>
        <meta name="description" content="Childrens and adult portrait Artist. Lynn Pronk, a portraiture artist living in Auckland, New Zealand and open to new commissions for portrait art." />
      </Helmet>
      <Layout>
        <GalleryContainer />
      </Layout>
    </>
  )
}
export default HomePage