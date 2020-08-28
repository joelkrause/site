import React from 'react';
import usePosts from '../../hooks/usePosts'
import styled from "styled-components"

const DevTo = () => {
    const posts = usePosts()

    return (
        <div>
            <h3>Latest Dev.To Posts</h3>
            {posts.map(post => (
                <PostWrapper href={post.url} rel="noopener noreferrer" target="_blank">
                    <PostTitle>
                        {post.title}
                    </PostTitle>
                    <PostDate>
                        {post.date}
                    </PostDate>
                </PostWrapper>
            ))}
        </div>
    );
}

export default DevTo;

const PostWrapper = styled.a`
    padding:0 0 2rem;
    display:flex;
    text-decoration:none;

    &:first-of-type{
        padding-top:2rem;
    }
`
const PostTitle = styled.div``

const PostDate = styled.div`
    margin-left:auto;
`