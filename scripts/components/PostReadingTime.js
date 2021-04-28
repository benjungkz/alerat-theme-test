import React from "react";
import readingTime from 'reading-time';


const PostReadingTime = ({content}) => {
    const stats = readingTime(content);
    return(
        <p className="post__reading">{stats.text}</p>       
    )
}

export default PostReadingTime;