import React from "react"
import { Link } from "gatsby"
import { globalHistory } from '@reach/router'
import "./main-nav-sticky.scss"
import mainNavStyles from "./main-nav.module.scss"


const MainNav = ({ location }) => {

  const link = globalHistory.location.pathname
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
            className={link.includes("/gallery/") ? mainNavStyles.navItem + ' ' + mainNavStyles.activeNavItem : mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            //getProps={isPartiallyActive}
            to="/"
          >
            My gallery

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
            className={link.includes("/testimonials/") ? mainNavStyles.navItem + ' ' + mainNavStyles.activeNavItem : mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            to="/testimonials"
          >
            Testimonials
          </Link>
        </li>

        <li>
          <Link
            className={link.includes("/contact/") ? mainNavStyles.navItem + ' ' + mainNavStyles.activeNavItem : mainNavStyles.navItem}
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
