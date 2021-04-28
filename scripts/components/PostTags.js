import React, { useState }  from "react";

const PostTags = ({tags}) =>{
    console.log(tags);
    return (

        <div className="post__wrap">
            {
                tags.map((tag, index) => {
                    return(
                        <p className="post__tag" key={index}>{tag}</p>
                    )
                })
            }
        </div>
        
    )
}

export default PostTags;