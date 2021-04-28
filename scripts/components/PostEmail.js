import React, { useState }  from "react";
import { Divider } from "@material-ui/core";

const PostEmail = () =>{
    return (
        <div className="post__subscribe">
            <img src="" alt="Alerta logo"/>
            <h3 >Dear Caregiver,
You don't have to research everything. 
We do. Join Alerta Family.</h3>
            <h6>Get free latest caregiving information, tips and resources delivered directly to your inbox</h6>
            <input type="text"/>
            <button className="btn">Subscribe</button>
            <h6>No charge. Unsubscribe anytime.</h6>

        </div>
    )
}

export default PostEmail;