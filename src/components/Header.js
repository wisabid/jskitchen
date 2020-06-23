import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === "info" &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          {/* <h1>{props.title}</h1> */}
          <img
            src="https://yt3.ggpht.com/a/AATXAJyQAptT6uy6ENvPfMRZLB6tVrDHbZeDf0QJ8A=s288-c-k-c0xffffffff-no-rj-mo"
            width="100"
          />
        </Link>
        <div>
          <h1>
            <Link
              to={props.page === "info" ? "/" : "/info"}
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === "info" ? "close" : "info"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}
