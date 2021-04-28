import React, { useState }  from "react";
import ReactPlayer from 'react-player'

const WISITA_URL = 'https://benjungkz.wistia.com/medias/';

const PostVideo = ({id}) =>{
    console.log(id);
    return(
        <div className="post__video">
            <ReactPlayer
                url={ WISITA_URL + id }
                width='100%'
                height='100%'
                config={
                    {
                        wistia: {
                            playerId : id,
                            options : {
                                videoFoam: true,
                                fullscreenButton: true,
                                qualityControl: true,
                                controlsVisibleOnLoad: true,
                                fitStrategy: 'cover',
                                fullscreenOnRotateToLandscape: true,
                                playbar: true,
                                playButton: true,
                                smallPlayButton: true,
                                videoFoam: true,
                                volumeControl: true,
                            }
                        }
                    }
                }
            />
        </div>
    );
}

export default PostVideo;