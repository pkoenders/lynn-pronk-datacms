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
      </Helmet>

      <Layout>
        <GalleryContainer />
      </Layout>
    </>
  )
}
export default HomePage