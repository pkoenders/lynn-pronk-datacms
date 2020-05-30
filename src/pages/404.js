import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "../styles/index.scss"


const NotFound = () => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>404 - Page not found"</title>
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