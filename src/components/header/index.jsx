import React from 'react'
import styled from "styled-components"

const Header = () => {
    return (
    <>
    <HeaderWrapper className="site__header">
        <HeaderTitle>joel krause</HeaderTitle>
        <HeaderTitle>joel krause</HeaderTitle>
        <HeaderTitle>joel krause</HeaderTitle>
        <HeaderTitle>joel krause</HeaderTitle>
    </HeaderWrapper>
    </>
    )
}

export default Header

const HeaderWrapper = styled.header`
    font-family:'Recursive';
    font-size:10vw;
    font-variation-settings: "wght" 900;
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    white-space:nowrap;
    overflow:hidden;
    line-height:1;
`
const HeaderTitle = styled.div`
    padding:0 2vw;
`