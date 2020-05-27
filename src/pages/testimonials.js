import React from 'react'
import Layout from '../components/layout'
import Head from "../components/head"
import Testimonial from '../components/testimonial'
import Helmet from "react-helmet"
import Header from "../components/header"
import aboutStyles from './about.module.scss';

const TestimonialPage = () => {
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
      <Head title="Testimonials" />


      <Header />
      <Layout>
        <div className={aboutStyles.aboutWrapper}>
          <h2>Testimonials</h2>
          <div className={aboutStyles.testimonialContent}>
            <Testimonial />
          </div>
        </div>
      </Layout>
    </>
  )
}
export default TestimonialPage