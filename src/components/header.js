import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import MainNav from "./main-nav"
import "../styles/hamburger.scss"
import headerStyles from "./header.module.scss"
import Signature from "../img/svg/signature.svg"



// export const fluidImage = graphql`
// fragment fluidImage on File {
//   childImageSharp {
//     fluid(maxWidth: 1000) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// `;


// export const componentImages = graphql`
//   query {
//     image1: file(relativePath: { eq: "../img/mikkis-magic-day.jpg" }) {
//       ...fluidImage
//     }
//   }
// `;



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
          fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mikkisPDF: file(relativePath: { eq: "img/mikkis-magic-day.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (

    <>
      <button className="hamburger hamburger--squeeze" type="button" aria-label="Menu" aria-controls="navigation" aria-expanded="false">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
        <span class="hamburger-label">Menu</span>
      </button>

      <header id="myHeader" className={headerStyles.header + ' ' + headerStyles.aside}>

        <div>
          <Link to="/" title="Home" >
            <div className={headerStyles.avatar}>
              <Img
                alt={'Lynn Pronk'}
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
            <Signature />
          </Link>


          <Link to="/" title="Home"  >
            <div className={headerStyles.avatar + ' ' + headerStyles.avatarMobile}>
              <Img
                alt={'Lynn Pronk'}
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
          </Link>

        </div>
        <MainNav />



        <div className={headerStyles.eBook}>
          <Img
            alt={'Mikkis magic day'}
            fluid={data.mikkisPDF.childImageSharp.fluid}
          />

          <p>Please download my free ebook as a PDF file  <br /><strong>Mikki’s magic day</strong></p>

        </div>

      </header>
    </>
  )
}

export default Header
