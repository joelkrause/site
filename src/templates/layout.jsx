import React from "react"
import Header from "../components/header"
import '../lib/styles/styles.scss'

const Layout = ({ children, location }) => {
    return (
    <>
        <main>{children}</main>
      </>
    )
}

export default Layout