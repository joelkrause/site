import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

const DEV_QUERY = graphql`
{
    allDevArticles {
      edges {
        node {
          article {
            title
            url
            published_at(fromNow: true)
            comments_count
            positive_reactions_count
            tag_list
          }
        }
      }
    }
  }
  
`

const LatestPosts = () => (
    <>
        <ArticleHeader>
            <h2>Latest Posts</h2>
            <a href="https://dev.to/joel" target="_blank" rel="noopener noreferrer">See All Posts</a>
        </ArticleHeader>
        <Articles>
        <StaticQuery
            query={DEV_QUERY}
            render={data => {
                return (
                    <>
                    {console.log(JSON.stringify(data, null, 4))}
                    {data.allDevArticles.edges.map(node => {
                        return(
                            <>
                                <Article href={node.node.article.url} target="_blank" rel="noopener noreferrer">
                                    <ArticleTitle>
                                        {node.node.article.title}
                                    </ArticleTitle>
                                    <ArticleDate>
                                        Posted {node.node.article.published_at}
                                    </ArticleDate>
                                    {/* <ArticleComments>
                                        {node.node.article.comments_count}
                                    </ArticleComments> */}
                                </Article>
                            </>
                        )
                    })}
                    </>
                )
            }}
        />
        </Articles>
    </>
)

export default LatestPosts

const Articles = styled.div`
display:flex;
flex-direction:column;
`

const Article = styled.a`
display:flex;
justify-content:space-between;
padding:0 0 3rem;
&:first-of-type{
    padding-top:3rem;
}
`

const ArticleHeader = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
`

const ArticleTitle = styled.div`
`

const ArticleComments = styled.div``

const ArticleDate = styled.div``