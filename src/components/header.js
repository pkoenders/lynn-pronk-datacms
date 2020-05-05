import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Img from 'gatsby-image'
import MainNav from "./main-nav"
//import "../styles/index.scss"
import "../styles/hamburger.scss"
import headerStyles from "./header.module.scss"
import Signature from "../img/svg/signature.svg"

const Header = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }

      file(relativePath: { eq: "img/lynn-avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 175, maxHeight: 175) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    
  `)

  return (

    <>
      <button className="hamburger hamburger--squeeze" type="button" aria-label="Menu" aria-controls="navigation" aria-expanded="true/false">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
        <span class="hamburger-label">Menu</span>
      </button>

      <header id="myHeader" className={headerStyles.header + ' ' + headerStyles.aside}>
        <div>
          <Link to="/" >
            <div className={headerStyles.avatar}>
              <Img
                alt={'Lynn Pronk'}
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
            <Signature />
          </Link>


          <Link to="/" >
            <div className={headerStyles.avatar + ' ' + headerStyles.avatarMobile}>
              <Img
                alt={'Lynn Pronk'}
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
          </Link>

        </div>
        <MainNav />
      </header>
    </>
  )
}

export default Header
