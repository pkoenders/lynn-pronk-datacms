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
      <p>© {new Date().getFullYear()} - Lynn Pronk Portraits</p>
      <p><a href="https://pkoenders.netlify.app/" title="Link to {data.site.siteMetadata.author}">Designed &amp; Built by {data.site.siteMetadata.author}<br />Graphic, UI &amp; Web Designer</a></p>
    </footer >
  )
}

export default Footer