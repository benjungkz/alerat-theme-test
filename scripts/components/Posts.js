import React, { useState }  from "react";
import PostCard from "./PostCard";
import Grid from '@material-ui/core/Grid';


const Posts  = ({posts, size}) =>{
  

    return(  
        <Grid container spacing={3}>
        { posts.map((edge, index)=>{
            // Get Main tag    
            let tag_name = ''
            edge.node.tags.forEach((tag, index)=>{
                if(tag.includes("Tag:")){
                    tag_name = tag.substr(5, tag.length);
                }
            });

            if(index <= size - 1){
                return(
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
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
    );


}

export default Posts;