import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import Testimonial from '../components/testimonial'
import aboutStyles from './about.module.scss';

const TestimonialPage = () => {
  const data = useStaticQuery(graphql`
  query TestimonialsData {
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
        <title>Client testimonials | {data.site.siteMetadata.title}</title>
        <meta name="description" content="A list of testimononials written by clients who have commissioned my work" />
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