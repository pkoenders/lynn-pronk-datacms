import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "../styles/index.scss"


const NotFound = () => {
    const data = useStaticQuery(graphql`
  query ErrorData {
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
                <title>Page not found | {data.site.siteMetadata.title}</title>
            </Helmet>
            <Layout>
                <div className={'fourOfour'}>
                    <h1>Sorry,</h1>
                    <h2>the requested page was not found</h2>
                    <Link className={'buttonPrimary'} to="/">Go back to My gallery</Link>
                </div>
            </Layout>
        </>
    )
}

export default NotFound