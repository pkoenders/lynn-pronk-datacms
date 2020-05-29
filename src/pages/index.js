import React, { } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import GalleryContainer from '../components/gallery-container'

const HomePage = props => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>My gallery</title>
        <meta name="description" content="This is the galley of Lynn Pronk, a portraiture artist living in Auckland, New Zealand and open to new commissions for portrait art." />
        <link
          rel="preconnect"
          href="https://lynn-pronk-datocms.netlify.app/"
        ></link>
        <link
          rel="preconnect"
          href="https://www.datocms-assets.com/26318/"
        ></link>
      </Helmet>

      <Layout>
        <GalleryContainer />
      </Layout>
    </>
  )
}
export default HomePage