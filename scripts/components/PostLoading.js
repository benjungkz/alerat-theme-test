import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from "@material-ui/core";

const PostLoading = () => {
    return(
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="post__loading">
                    <CircularProgress/>
                </div>
            </Grid>
        </Grid>
    )
}

export default PostLoading;