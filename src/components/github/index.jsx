import React from "react"
import { StaticQuery, graphql } from "gatsby"

const QUERY = graphql`
{
    allPinnedRepo(limit: 10) {
      edges {
        node {
          name
          description
          url
        }
      }
    }
  }
`

const GitHub = () => {
    return (
        <div className="item__block">
            <h3>Pinned Repos</h3>
            <StaticQuery
                query={QUERY}
                render={({ allPinnedRepo }) => {
                if (allPinnedRepo) {
                    return (
                    <>
                        {allPinnedRepo.edges.map(node => {
                        return (
                            <article>
                                <a href={node.node.url}>
                                    {node.node.name}
                                </a>
                                <span>
                                {node.node.description}
                                </span>
                            </article>
                        )
                        })}
                    </>
                    )
                }
                }}
            />
        </div>
    )
}

export default GitHub