import React, { useState }  from "react";
import PostContent from './PostContent';
import PostReadingTime from "./PostReadingTime";
import PostAvatar from "./PostAvatar";
import Chip from '@material-ui/core/Chip';
import PostShare from "./PostShare";
import RelatedPost from "./RelatedPost";
import ChipColor from "../Static/ChipColor";
import PostVideo from "./PostVideo";
import PostTags from "./PostTags";
import PostEmail from "./PostEmail";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


let postDate = '';
let postChipColor = '';
let postInfo = {};
let postTags = [];

const Post = ({post, handle}) => {
    // Set date
    const setDate = () => {
        const date = new Date(post.publishedAt);
        const options = { year: 'numeric', month: 'long', day: 'numeric'}
        postDate = new Intl.DateTimeFormat('en-US', options).format(date);
    }

    // Align Tags
    const alignTags = () => {
        post.tags.forEach((tag, index)=>{
            let prefix_index = tag.indexOf(':');

            // substr() - Lentgh is negative, the fx return ''
            let prefix = tag.substr(0, prefix_index);

            prefix != '' ? 
            Object.assign(postInfo, { [prefix] : tag.substr(prefix_index + 2, tag.length) }) : postTags.push(tag)
        });

    }
    
    setDate();
    alignTags();

    


    return(
        <>
        <Container fixed maxWidth="md">
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Chip
                            className="post__tag"
                            label={postInfo.Tag}
                            size="medium"
                            clickable
                            style={{
                                backgroundColor: ChipColor[postInfo.Tag].color
                            }}
                        />
                    <h1 className="post__title">{post.title}</h1>
                </Grid>  

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="post__header">                    
                        <div className="post__info">
                            <PostAvatar content={post.contentHtml}/>
                            <div>
                                <p className="post__author--name">{postInfo.Author}</p>
                                
                                <p className="post__date">{postDate}</p>
                                <PostReadingTime content={post.contentHtml}/>        
                            </div>
                        </div> 
                        <PostShare url={post.url}  className="post__share"/>    
                    </div>
                </Grid> 

                <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="post__body">
                        <PostContent html={post.contentHtml}/>
                        { postInfo.Video? <PostVideo id={postInfo.Video}/> : null }
                        <div class="klaviyo-form-SWeryD"></div>
                    </div>
                </Grid> 
                
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="post__footer">
                        <Divider className="post__divider post__divider--xs" light />
                        <h3 className="post__menu post__menu--xs">Share</h3>
                        <PostShare url={post.url} className="post__share post__share--xs"/>

                        
                        {/* <Divider className="post__divider" light />
                        <PostEmail/>
                         */}
                         
                        <Divider className="post__divider" light />
                        <h3 className="post__menu">Tags</h3>
                        <PostTags tags={postTags}/>

                        <Divider className="post__divider" light />
                        <h3 className="post__menu">Related Posts</h3>
                        <RelatedPost handle={handle}/>

                    </div>
                </Grid>
            </Grid>
        
        </Container>
        </>
    )
}

export default Post;