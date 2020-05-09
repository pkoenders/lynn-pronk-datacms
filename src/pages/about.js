import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import IndexBGroundImg from '../components/index-bground-img'
import Layout from '../components/layout'

import Head from '../components/head'
import Header from "../components/header"
import aboutStyles from './about.module.scss';



export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "img/lynn-photo.jpg" }) {
      ...fluidImage
    }
    image2: file(relativePath: { eq: "img/mikkis-magic-day.jpg" }) {
      ...fluidImage
    }
  }
`


const AboutPage = (props) => {


  return (
    <div>
      <IndexBGroundImg />
      <Header />
      <Layout>
        <Head title="About Lynn Pronk" />


        <div className={aboutStyles.aboutWrapper}>
          <h2>Hi there!</h2>
          <div className={aboutStyles.aboutContent}>
            <p><strong> I have been painting and drawing since I was young, and for as long as I can remember I’ve always created pictures with people. People really fascinate me and a painting or drawing without a person in it somehow feels incomplete, and not so interesting to me. Over time, my figure paintings developed into portraits. In my early thirties I first started painting family and friends, and more recently have specialised in children’s portraits. Now I am getting requests for memorial portraits as well.</strong></p>
            <p>Portraiture is my forte and passion, and it involves a lot more than just capturing a likeness. I try to capture the spirit of a person as well.</p>
            <p>My work has a high emotional value and it’s very fulfilling to know my portraits will be treasured and part of a family for years to come. Each commission is a one of a kind and I enjoy the unique challenges that each one offers. I love the process of first communicating with clients and working with them to create a memorable portrait.</p>

            <span className={aboutStyles.imgWrapper}>
              <Img
                alt={'Lynn Pronk'}
                fluid={props.data.image1.childImageSharp.fluid}
              />
            </span>

            <h3>It’s easy to commission a portrait.</h3>
            <ul>
              <li>Simply email or post me your favourite photo or photos and I will let you know if they are suitable. Both black and white and coloured photos are okay.</li>
              <li>I can combine different photos to create a unique double or group portrait.</li>
              <li>I can also create fantasy or theme based backgrounds.</li>
              <li>Portraits usually take 3 to 4 weeks to complete, but if you have a deadline I can aim to meet this.</li>
              <li>My standard size is 61 x 51cm on good quality stretched canvas.</li>
              <li>All enquiries welcome. You can message me through this website, email me or if you prefer call me.</li>
            </ul>
            <p><strong>-Lynn</strong></p>

            <h3>Please download my free ebook – Mikki’s magic day</h3>

            <span className={aboutStyles.imgWrapper}>
              <Img
                alt={'Mikkis magic day'}
                fluid={props.data.image2.childImageSharp.fluid}
              />
            </span>

          </div>
        </div>
      </Layout >
    </div >
  )
}

export default AboutPage