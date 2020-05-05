import React from 'react'
import IndexBGroundImg from '../components/contact-bground-img'
import Layout from '../components/layout'

import Head from '../components/head'
import Header from "../components/header"


const AboutPage = () => {
  return (
    <div>
      <IndexBGroundImg />
      <Header />
      <Layout>
        <Head title="About" />
        <h2>About</h2>
        <p>All about this site.</p>
      </Layout>
    </div>
  )
}

export default AboutPage