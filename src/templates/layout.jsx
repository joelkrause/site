import React from "react"
import Header from "../components/Header"
import '../lib/styles/styles.scss'

const Layout = ({ children, location }) => {
    return (
    <>
    <Header />
        <main>{children}</main>
      </>
    )
}

export default Layout