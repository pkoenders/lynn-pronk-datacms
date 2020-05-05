import React, { useState } from 'react'
import IndexBGroundImg from '../components/contact-bground-img'
import Layout from '../components/layout'
import Head from '../components/head'
import Header from "../components/header"
import { Link, useStaticQuery, graphql } from 'gatsby'
import LightBox from '../components/lightbox'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import blogStyles from './portfolio.module.scss'
import RightArrow from "../img/svg/icon-arrow-right.svg"




const BlogPage = props => {









  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpen = i => e => {
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length)
  }


  const clickListener = () => console.log('document clicked');
  // // Attach a click listener on the document.
  // document.addEventListener('click', clickListener);

  // // Detach the click listener on the document.
  // document.removeEventListener('click', clickListener);


  //const btn = document.querySelector('closeReactLightbox')
  // componentDidMount(){
  //   alert(`Did mount`)
  //   //btn.addEventListener('click', this.handleClickOutside, true);
  // }

  // handleClickOutside = event => {
  //   const domNode = ReactDOM.findDOMNode(this);

  //   if (!domNode || !domNode.contains(event.target)) {
  //     this.setState({
  //       visible: false
  //     });
  //   }
  // }


  // componentWillUnmount() {
  //     document.removeEventListener('click', this.handleClickOutside, true);
  //   }

  // //document.addEventListener("DOMContentLoaded", checkElements());
  // class Counter extends BlogPage {

  //   componentDidMount() {
  //     window.addEventListener('scroll', this.handleScroll.bind(this));
  //   }

  //   const eventObj = {
  //     handleEvent(e) {
  //       alert(`Hello, there! You clicked on a ${e.target.nodeName}`)
  //     }
  //   }
  //   const btn = document.querySelector('closeReactLightbox')
  //   btn.addEventListener('click', eventObj)
  // }
  // //}



  //document.addEventListener("DOMContentLoaded", checkElements());

  //function checkElements() {
  //alert('checkElements is ready');
  //console.log('Close element = ' + document.getElementsByClassName('closeReactLightbox').)

  //var closeBtnLightbox = document.querySelectorAll('.closeReactLightbox')[0];


  //var closeBtnLightbox = document.querySelector('closeReactLightbox');
  //console.log('Close element is closeBtnLightbox = ' + closeBtnLightbox)
  //closeBtnLightbox.addEventListener('click', function (event) {



  //   //   // Do stuff
  //   //   handleClose(true);

  //});
  //}


  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolio (sort: { fields: [position], order: ASC }) {
      edges 
        {
          next {
            slug
            title
          }
           previous {
            slug
            title
          }
        node
          {
            title
            slug
            addToHomepage
            coverImage 
            {
              url
              alt
              
              fluid(maxWidth: 360, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
            }
            

          }
        }  
      }
    }
  } 
  `)


  return (

    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Head title="Home" />
      {/* <IndexBGroundImg /> */}
      <Header />
      <Layout>

        <div className={blogStyles.filterPosts}>
          <span><button type="button" class="buttonSecondary active filterGalleryBtn">All Portraits</button></span>
          <span><button type="button" class="buttonSecondary filterGalleryBtn">Child Portraits</button></span>
          <span><button type="button" class="buttonSecondary filterGalleryBtn">Adult Portraits</button></span>
        </div>

        <ol id="myBlogList" className={blogStyles.posts + ' ' + 'grid'}>

          {data.allDatoCmsPortfolio.edges.map((edge, i) => {
            const images = data.allDatoCmsPortfolio.edges

            return (


              <li className={blogStyles.post + ' ' + 'item'}>
                {showLightbox && selectedImage !== null && (
                  <LightBox
                    images={images}
                    handleClose={handleClose}
                    handleNextRequest={handleNextRequest}
                    handlePrevRequest={handlePrevRequest}
                    selectedImage={selectedImage}
                  />
                )}

                {/* <Link to={`/portfolio/${edge.node.slug}`} className={'item-content'}  ></Link> */}
                <div
                  className={'item-content'}
                  onClick={handleOpen(i)}
                  key={i}>
                  <Img fluid={edge.node.coverImage.fluid}
                    alt={edge.node.coverImage.alt}
                    src={edge.node.coverImage.url}>
                  </Img>

                  <Link to={`/portfolio/${edge.node.slug}`} className={'item-content'}  >
                    <h2>{edge.node.title} <RightArrow /></h2>
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div >
  )
}



export default BlogPage




