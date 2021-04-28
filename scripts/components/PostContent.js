import React from "react";
import ReactDOM from "react-dom";
import ReactHtmlParser from 'react-html-parser';

const PostContent = ({html}) => {

    return(
        <div>{ReactHtmlParser(html)}</div>
    )    
    
}

export default PostContent;