import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea } from '@material-ui/core';

const PRIMARY_POST_HANDLE = "healthy-neurons-lifestyle-can-reduce-risk-of-alzheimer-s-disease";
let postInfo = {};

const useStyles = makeStyles({
    root: {
        backgroundColor: '#D12220',
        border: 0,
        borderRadius: '3px',
        color: '#ffffff',
        fontFamily: 'marine, sans-serif'
    }

})


const BlogHero = ({posts}) => {

    const alignTags = (tags) => {
        tags.forEach((tag, index)=>{

            let prefix_index = tag.indexOf(':');

            // substr() - Lentgh is negative, the fx return ''
            let prefix = tag.substr(0, prefix_index);

            prefix != '' ? 
            Object.assign(postInfo, { [prefix] : tag.substr(prefix_index + 2, tag.length) }) : null
            
        });

    }

    const classes = useStyles();

    return(
        posts.map((edge)=>{
            if(edge.node.handle == PRIMARY_POST_HANDLE){
                
                //tag
                alignTags(edge.node.tags);


                return(
                    
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key="blog__card">
                        <h2 className="Blog__all">Featured Post</h2>
                        <Card>
                            <CardActionArea href={edge.node.url}>
                                <div className="Blog__card" key="card">
                                    <CardMedia
                                        className='PostCard__image Blog__card--image'
                                        image={edge.node.image.originalSrc}
                                        title={edge.node.image.alt}
                                        component='img'
                                    />
                                    
                                    <CardContent>
                                        <div className="Blog__card--content">
                                                <div className="Blog__card--container">
                                                    <h6 className="PostCard__tag">{postInfo.Tag}</h6>
                                                    <h1 className="PostCard__title PostCard__title--hero">{edge.node.title}</h1>
                                                </div>
                                                <div className="Blog__card--container">
                                                    <Button 
                                                        size="medium" 
                                                        color="primary" 
                                                        variant="contained"
                                                        endIcon={<ArrowForwardIosIcon/>}
                                                        className={classes.root}>
                                                    
                                                        READ POST
                                                    </Button>
                                                </div>
                                        
                                        </div>
                                    </CardContent>
                                    
                                </div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                );
            }
        })
    )
}

export default BlogHero