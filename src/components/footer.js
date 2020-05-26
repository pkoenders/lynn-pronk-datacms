import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author,
          year
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>© {new Date().getFullYear()} - Design &amp; build by {data.site.siteMetadata.author} - Freelance UI Web Designer</p>
    </footer>
  )
}

export default Footer