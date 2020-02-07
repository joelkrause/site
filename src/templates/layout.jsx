import React from "react"
import styled from 'styled-components'
import Header from "../components/Header"
import '../lib/styles/styles.scss'

const Layout = ({ children, location }) => {
    return (
    <>
        <MainWrapper>{children}</MainWrapper>
      </>
    )
}

export default Layout

const MainWrapper = styled.main`
  @media(min-width:1366px){
    max-width:50vw;
  }
`