import React from "react";
import  { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import BlogChips from "./BlogChips";
import PostLoading from "./PostLoading";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import BlogHero from "./BlogHero";

const ALL_POST_QUERY = "blog_title:'Alerta Blog'";
const INITIAL_DISPLAY_POSTS_COUNT = 3;


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
                        content(truncateAt:80)
                        handle
                  }
            }
      }
}`;

const BlogAPI = () => {
      
      const { data, error, loading } = useQuery(GET_POSTS, {
          variables: {query: ALL_POST_QUERY}
      });

      if(loading) return <PostLoading />

      return(
            <Container fixed maxWidth="xl">
                  <Grid container className="Blog__card--hero">
                        <BlogHero posts={data?.articles.edges}/>
                  </Grid>      
                  <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                              {/* <Posts posts={data?.articles.edges} size={INITIAL_DISPLAY_POSTS_COUNT} /> */}
                              <BlogChips posts={data?.articles.edges}/>
                        </Grid>
                  </Grid>
            </Container>
      )     
}

export default BlogAPI;