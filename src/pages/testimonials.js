import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Testimonial from '../components/testimonial'
import aboutStyles from './about.module.scss';

const TestimonialPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Client testimonials</title>
        <meta name="description" content="A list of testimononials written by clients who have commissioned my work" />
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