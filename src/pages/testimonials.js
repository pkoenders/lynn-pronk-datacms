import React from 'react'
import Layout from '../components/layout'
import Testimonial from '../components/testimonial'
import Head from '../components/head'
import Header from "../components/header"
import aboutStyles from './about.module.scss';

const TestimonialPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Head title="About Lynn Pronk" />

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