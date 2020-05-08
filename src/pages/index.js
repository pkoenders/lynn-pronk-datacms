import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Header from "../components/header"
import Helmet from "react-helmet"
//import blogStyles from "./portfolio.module.scss"
import Gallery from "../components/gallery"
import GalleryContainer from "../components/gallery-container"
// import GalleryFilter from "../components/gallery-filter"

const BlogPage = props => {
  const categoryFilter = "homepage"

  return (
    <div>
      <Helmet
        title="Lynn Pronk Portfolio"
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
      </Helmet>
      <Head title="Home" />
      {/* <IndexBGroundImg /> */}
      <Header />
      <Layout>
        <GalleryContainer />
      </Layout>
    </div>
  )
}

export default BlogPage
