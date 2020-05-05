import React from "react"
import { Link } from "gatsby"
import "./main-nav-sticky.scss"
import mainNavStyles from "./main-nav.module.scss"


const MainNav = () => {

  const link = window.location.pathname;
  console.log("link = " + link)

  const isPartiallyActive = ({
    isPartiallyCurrent
  }) => {
    return isPartiallyCurrent
      ? { className: "main-nav-module--nav-item--1U-D_ main-nav-module--active-nav-item--Za2XO" }
      : {}
  }





  return (
    <nav id="myTopnav">

      <ul className={mainNavStyles.navList}>
        <li>
          <Link
            className={link.includes("/portfolio/") ? mainNavStyles.navItem + ' ' + mainNavStyles.activeNavItem : mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            //getProps={isPartiallyActive}
            to="/"
          >
            My portfolio
          </Link>
        </li>


        <li>
          <Link
            className={link.includes("/portfolio/") ? mainNavStyles.navItem + ' ' + mainNavStyles.activeNavItem : mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            //getProps={isPartiallyActive}
            to="/portfolio-alt-layout"
          >
            My portfolio alt layout
          </Link>
        </li>





        <li>
          <Link
            className={'closeReactLightbox' + ' ' + mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}

            // onClick={handleClose(true)}
            //onClick={this.closeReactLightbox}
            //onCloseRequest={() => this.setState({ isOpen: false })}
            to="/portfolio-alt"
          >
            My portfolio - Gallery
          </Link>
        </li>

        <li>
          <Link
            className={mainNavStyles.navItem + ' ' + 'SRLCloseButton'}
            activeClassName={mainNavStyles.activeNavItem}
            //onClick={closeLightbox}
            //getProps={isPartiallyActive}
            to="/portfolio-slb"
          >
            My portfolio - Simple Light Box
          </Link>
        </li>

        <li>
          <Link
            className={mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            to="/about"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            className={mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            getProps={isPartiallyActive}
            to="/contact"
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav >
  )
}

export default MainNav
