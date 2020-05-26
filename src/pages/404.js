import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from "../components/header"
import Head from '../components/head'
import "../styles/index.scss"


const NotFound = () => {
    return (
        <Layout>
            <Header />
            <Head title="404 - Page not found" />
            <div className={'fourOfour'}>
                <h1>Sorry,</h1>
                <h2>the requested page was not found</h2>
                <Link className={'buttonPrimary'} to="/">Go back to My gallery</Link>
            </div>
        </Layout>
    )
}

export default NotFound