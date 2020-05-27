import React, { } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Header from "../components/header"
import Helmet from "react-helmet"
import GalleryContainer from "../components/gallery-container"

const HomePage = props => {
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
      <Head title="My gallery" />


      <Header />
      <Layout>
        <GalleryContainer />
      </Layout>
    </>
  )
}
export default HomePage