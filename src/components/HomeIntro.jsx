import React from 'react'
import styled from 'styled-components'
// ICONS
import {FaTwitter, FaCodepen, FaGithub, FaDev, FaInstagram} from 'react-icons/fa';

const HomeIntro = () => {
  return (
    <HomeIntroWrapper>
      <HomeIntroContent>
        <h1>Hey, I'm Joel</h1>
        <p>I'm a passionate frontend web developer from Melbourne.</p>
        <p>Currently working at
          <a href="https://raak.com.au" target="_blank">Raak Creative</a>, I build beautiful sites with
          <a href="https://gatsbyjs.org" target="_blank">Gatsby</a>
          &amp; WordPress.</p>
      </HomeIntroContent>
      <SocialWrapper>
        <h3>Socialise with me</h3>
        <SocialList>
          <li>
            <a href="https://twitter.com/joel_krause" target="_blank"><FaTwitter/></a>
          </li>
          <li>
            <a href="https://instagram.com/developer_joel" target="_blank"><FaInstagram/></a>
          </li>
          <li>
            <a href="https://dev.to/joel" target="_blank"><FaDev/></a>
          </li>
          <li>
            <a href="https://github.com/joelkrause" target="_blank"><FaGithub/></a>
          </li>
          <li>
            <a href="https://codepen.com/jkrs" target="_blank"><FaCodepen/></a>
          </li>
        </SocialList>
      </SocialWrapper>
      <ContactWrapper>
        <h3>Get In Touch</h3>
        <p>If you have any questions, or need advice, my inbox is always open!.</p>
        <p>Feel free to shoot me an
          <a href="mailto:joel.krause8@gmail.com">email</a>
        </p>
      </ContactWrapper>
    </HomeIntroWrapper>
  )
}

export default HomeIntro

const HomeIntroWrapper = styled.div `
display: flex;
flex-wrap: wrap;
`;
const HomeIntroContent = styled.div `
width:100%;
`;

const HomeProfilePic = styled.div `

`

const SocialWrapper = styled.div `
margin:0 0 2.5rem;
padding-right:5vw;
`;

const SocialList = styled.ul `
list-style: none;
padding: 0;
margin:1rem 0 0;
display: flex;
li{
    &:not(:last-of-type){
        margin-right:1rem;
    }
}
`;

const ContactWrapper = styled.div `
margin:0 0 2.5rem;
`;