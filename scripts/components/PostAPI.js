import React from "react";
import  { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Post from './Post';
import PostLoading from "./PostLoading";
// GraphQL Query
const GET_POST = gql` 
query getPost($blogHandle: String!, $postHandle: String!){
        blogByHandle(handle: $blogHandle){
            articleByHandle(handle: $postHandle){
                title
                publishedAt
                contentHtml
                content
                authorV2{
                    name
                }
                tags
                url
            }
        }
}`;

const PostAPI = ({blogHandle, postHandle}) => {
    const { data, error, loading } = useQuery(GET_POST, {
        variables: {
            blogHandle: blogHandle,
            postHandle: postHandle
        }
    });

    if(loading) return <PostLoading />

    console.log(data.blogByHandle.articleByHandle);

    return(
       <Post post={data.blogByHandle.articleByHandle} handle={postHandle}/>
    )
}

export default PostAPI;