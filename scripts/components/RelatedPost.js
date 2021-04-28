import React, { useState }  from "react";
import ReactDOM from "react-dom";
import  { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostCard from "./PostCard";
import Grid from '@material-ui/core/Grid';

const ALL_POST_QUERY = "blog_title:'Alerta Blog'";
const INITIAL_DISPLAY_POSTS_COUNT = 1;

//Create Query
const GET_POSTS = gql` 
query getPosts($query: String!){
      articles(first: 100, query: $query){
            edges{
                  node{
                        title
                        contentHtml
                        image{
                              originalSrc
                              altText
                        }
                        url
                        tags
                        handle
                  }
            }
      }
}`;

const RelatedPost = ({handle}) => {

    console.log(handle);

    const { data, error, loading } = useQuery(GET_POSTS, {
        variables: {query: ALL_POST_QUERY}
    });

    if(loading) return <CircularProgress />

    //Get main tag

    
  

    return(
        <Grid container spacing={2}>
        { data.articles.edges.map((edge, index)=>{
            // Get Main tag    
            let tag_name = ''
            edge.node.tags.forEach((tag, index)=>{
                if(tag.includes("Tag:")){
                    tag_name = tag.substr(5, tag.length);
                }
            });
                
            if(edge.node.handle != handle){
                return(
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}>
                        <PostCard 
                            title={edge.node.title}
                            imageUrl={edge.node.image.originalSrc}
                            imageAlt={edge.node.image.altText}
                            postUrl={edge.node.url}
                            tag={tag_name}
                        />   
                    </Grid>
                )  
            }    
         })}
        </Grid>
    )
}

export default RelatedPost;