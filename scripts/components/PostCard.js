import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: '#D12220',
            color: 'white',
            borderColor: '#D12220'
        }
        
    }

})

const PostCard = ({tag, title, imageUrl, imageAlt, postUrl}) => {
    const classes = useStyles();
    return(
       
        <Card>
            <CardActionArea className="CardAction" href={postUrl}>
                        <CardMedia
                            className='PostCard__image'
                            image={imageUrl}
                            title={imageAlt}
                            component='img'
                        />
                        <CardContent>
                            <div className="PostCard__info">
                                <h6 className="PostCard__tag">{tag}</h6>
                                <h5 className="PostCard__title">{title}</h5>
                                <div className="PostCard__button">
                                    <Button 
                                        size="medium" 
                                        color="primary" 
                                        variant="outlined"
                                
                                        endIcon={<ArrowForwardIosIcon/>}
                                        className={classes.root}>
                                    Read
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
            </CardActionArea>
        </Card>
     
    )
}

export default PostCard;