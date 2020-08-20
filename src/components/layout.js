import React from 'react'
//import PreConnect from '../components/helmet-preconnect'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = props => {
  return (
    <>
      <PreConnect />
      <Header />
      <div id="layoutModule" className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <main>
            {props.children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout