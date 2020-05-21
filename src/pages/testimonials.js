import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import IndexBGroundImg from '../components/index-bground-img'
import Layout from '../components/layout'

import Head from '../components/head'
import Header from "../components/header"
import aboutStyles from './about.module.scss';







const AboutPage = () => {



  const data = useStaticQuery(graphql`
query {
    allDatoCmsTestimonial {
      edges {
        node {
          chooseColour {
            hex
          }
          dateOfTestmonial(difference: "", formatString: "MMMM YYYY", fromNow: false, locale: "")
          name
          testmonial
        }
      }
    }
  }
`)


  return (
    <div>
      <IndexBGroundImg />
      <Header />
      <Layout>
        <Head title="About Lynn Pronk" />


        <div className={aboutStyles.aboutWrapper}>
          <h2>Testimonials</h2>
          <div className={aboutStyles.aboutContent}>



            {data.allDatoCmsTestimonial.edges.map((edge, i) => {

              return (
                <div style={{ color: edge.node.chooseColour.hex }}>
                  <span>“</span><div dangerouslySetInnerHTML={{ __html: edge.node.testmonial }} /><span>”</span>

                  <p>{edge.node.name}</p>
                  <p>{edge.node.dateOfTestmonial}</p>
                </div>
              )
            })}

          </div>
        </div>
      </Layout >
    </div >
  )
}

export default AboutPage