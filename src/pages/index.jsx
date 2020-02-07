import React from "react"
import Layout from "../templates/layout"
import SEO from "../components/global/seo"
import HomeIntro from '../components/HomeIntro'
import LatestPosts from '../components/LatestPosts'

const Page = () => {
    return (
    <Layout>
        <SEO title="Home" />
        <HomeIntro />
        <LatestPosts />
    </Layout>
    )
}

export default Page
