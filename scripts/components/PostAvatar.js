import React from "react";
import PostAuthors from '../Static/PostAuthors';
const PostAvatar = ({content}) => {

    const author = PostAuthors.filter( author => author.intial == 'JB');
    console.log(author[0].imgUrl);

    return(
        <img className="post__author--pic" src={author[0].imgUrl} alt={author[0].name}/>
    )       
}

export default PostAvatar;