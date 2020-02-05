import React from 'react'
import styled from 'styled-components'

const Header = () => (
<HeaderWrapper>
    <LogoWrapper>
    Joel Krause
    </LogoWrapper>
    <NavWrapper>
        <NavList>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Posts</a>
            </li>
        </NavList>
    </NavWrapper>
</HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.header`
position:fixed;
top:0;
left:0;
width:100vw;
padding:1rem;
display:flex;
justify-content:space-between;
`

const LogoWrapper = styled.div`
color:white;
`

const NavWrapper = styled.nav``

const NavList = styled.ul`
display:flex;
li{
    &:not(:last-of-type){
        margin-right:1rem;
    }
}
`