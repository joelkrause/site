import React from "react"
import Layout from "../templates/layout"
import SEO from "../components/global/seo"
import Noteworthy from "../components/noteworthy/noteworthy"
import GitHub from "../components/github"

// ICONS
import { FaTwitter, FaCodepen, FaGithub, FaDev } from 'react-icons/fa';

const Page = () => {
    return (
    <Layout>
    <SEO title="Home" />
    <div className="home__intro">
        <div className="home__intro-content">
        <h1>Hey, I'm Joel</h1>
        <p>I'm a passionate frontend web developer from Melbourne.</p>
        <p>I work at <a href="https://raak.com.au" target="_blank">Raak</a>, building headless WordPress sites with Gatsby.</p>
        </div>
        <div className="home__intro-social">
            <h3>Socialise with me</h3>
            <ul>
                <li><a href="https://twitter.com/joel_krause" target="_blank"><FaTwitter /></a></li>
                <li><a href="https://codepen.com/jkrs" target="_blank"><FaCodepen /></a></li>
                <li><a href="https://github.com/joelkrause" target="_blank"><FaGithub /></a></li>
                <li><a href="https://dev.to/joel" target="_blank"><FaDev /></a></li>
            </ul>
        </div>
        <div className="home__intro-contact">
            <h3>Get In Touch</h3>
            <p>If you have any questions, or need advice, my inbox is always open!.</p>
            <p>Feel free to shoot me an <a href="#">email</a></p>
        </div>
    </div>
    <GitHub />
    </Layout>
    )
}

export default Page