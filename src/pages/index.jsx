import React from "react"
import styled from "styled-components"

import Layout from "../templates/layout"
import SEO from "../components/global/seo"
import DevTo from "../components/dev-to"


// ICONS
import { FaTwitter, FaCodepen, FaGithub, FaDev, FaInstagram } from 'react-icons/fa';

const Page = () => {
    return (
    <Layout>
    <SEO title="Home" />
    <PageWrapper>
        <Hero className="home__intro">
            <HeroContent className="home__intro-content">
                <h1>Hey, I'm Joel</h1>
                <p>I'm a passionate frontend web developer from Melbourne.</p>
                <p>I work at <a href="https://raak.com.au" target="_blank">Raak</a> as a front end web developer, building headless sites with Nuxt.js, WordPress, StoryBlok and Shopify.</p>
            </HeroContent>
            <HeroDetails className="home__intro-social">
                <h3>Socialise with me</h3>
                <HeroDetailsList>
                    <li><a href="https://twitter.com/joel_krause" target="_blank"><FaTwitter /></a></li>
                    <li><a href="https://codepen.com/joelkrause" target="_blank"><FaCodepen /></a></li>
                    <li><a href="https://github.com/joelkrause" target="_blank"><FaGithub /></a></li>
                    <li><a href="https://dev.to/joel" target="_blank"><FaDev /></a></li>
                    <li><a href="https://instagram.com/developer_joel" target="_blank"><FaInstagram /></a></li>
                </HeroDetailsList>
            </HeroDetails>
            <HeroDetails className="home__intro-contact">
                <h3>Get In Touch</h3>
                <p>If you have any questions, or need advice, my inbox is always open!.</p>
                <p>Feel free to shoot me an <a href="mailto:joel.krause8@gmail.com">email</a></p>
            </HeroDetails>
        </Hero>
        <DevTo />
    </PageWrapper>
    </Layout>
    )
}

export default Page

const PageWrapper = styled.main`
    padding: 7.5vw;
`

const Hero = styled.div`
    display: flex;
    flex-wrap: wrap;
    h1 {
        font-size: 2.5rem;
    }

    h3 {
        margin: 2.5rem 0 0;
    }
`

const HeroContent = styled.div`
    width: 100%;
`

const HeroDetails = styled.div`
    margin: 0 0 2.5rem;
`

const HeroDetailsList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;

    &:first-of-type{
        padding-right:5vw;
    }

    li {
        &:not(:last-of-type) {
          margin-right: 1rem;
        }
    }
`