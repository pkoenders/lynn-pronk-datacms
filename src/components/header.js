import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import MainNav from "./main-nav"
import "../styles/hamburger.scss"
import headerStyles from "./header.module.scss"
import Signature from "../img/svg/signature.inline.svg"

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }

      file(relativePath: { eq: "img/lynn-avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      mikkisPDF: file(relativePath: { eq: "img/mikkis-magic-day.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 100, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <button className="hamburger hamburger--squeeze" type="button" aria-label="Menu" aria-controls="navigation" aria-expanded="false">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
        <span className="hamburger-label">Menu</span>
      </button>

      <header id="myHeader" className={headerStyles.header + ' ' + headerStyles.aside}>
        <div className={headerStyles.wrapper}>

          <Link to="/" title="Home" >
            <div className={headerStyles.avatar}>
              <Img
                width='100%'
                alt={'Lynn Pronk'}
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
            <Signature />
          </Link>

          <Link to="/" title="Home"  >
            <div className={headerStyles.avatar + ' ' + headerStyles.avatarMobile}>
              <Img
                width='100%'
                alt={'Lynn Pronk'}
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
          </Link>

          <MainNav />

          <hr />

          <p>Please download my free ebook as a PDF file</p>
          <a href="/mikkis-magic-day.pdf" title="Download my free ebook - 'Mikkis magic day'" target="_blank">
            <div className={headerStyles.eBook}>
              <Img
                width='100%'
                alt={'Mikkis magic day'}
                fluid={data.mikkisPDF.childImageSharp.fluid}
              />
              <p>Mikki’s magic day</p>
            </div>
          </a>
          <hr />
        </div>
      </header>
    </>
  )
}

export default Header
