import React from "react";
import { FacebookShareButton, EmailShareButton, TwitterShareButton } from "react-share";
import PostShareIcon from '../Static/PostShareIcon';

const PostShare = ({url, className}) => {
    return (
        <div className={ className }>
            <img src={PostShareIcon.printer.imgUrl} alt={PostShareIcon.printer.imgAlt} 
                onClick={()=>{window.print()}}
                style={{ cursor: "pointer" }}/>
            <EmailShareButton url={url}>
                 <img src={PostShareIcon.email.imgUrl} alt={PostShareIcon.email.imgAlt}/>
            </EmailShareButton>
            <FacebookShareButton url={url}>
                 <img src={PostShareIcon.facebook.imgUrl} alt={PostShareIcon.facebook.imgAlt}/>
            </FacebookShareButton>
            <TwitterShareButton url={url}>
                 <img src={PostShareIcon.twitter.imgUrl} alt={PostShareIcon.twitter.imgAlt}/> 
            </TwitterShareButton>
        </div>    
    )
}

export default PostShare;