import React, { useState } from "react";
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Posts from "./posts";
import ChipColor from "../Static/ChipColor";

let tagsMap = new Map();
let ArrayForDisplay = [];
let ArrayLengthForDisplay = 0;


const BlogChips = ({posts}) => {
    // Hook
    const [ selectedQueryByChip, setSelectedQueryByChip ] = useState(posts);   
    const [ postSize, setPostSize ] = useState(3);
    const [ showButton, setShowButton ] = useState(true);
   

    // Get chip data
    posts.forEach((edge)=>{
        // Get main tag

        let tag_name = ''

        edge.node.tags.forEach((tag, index)=>{
            if(tag.includes("Tag:")){
                tag_name = tag.substr(5, tag.length);
            }
        });
        
        if(!tagsMap.has(tag_name)){
                tagsMap.set(tag_name, 1);
        }else{
                let tag_number = tagsMap.get(tag_name);
                tagsMap.set(tag_name, ++tag_number);
        }
    })

    // Convert map to array
    const tagsArray = [...tagsMap].map(([key, value])=>({key, value}))    

    // Handler
    const chipHandler = (tag) =>{
        if(tag!='all'){
            ArrayForDisplay= posts.filter( (edge) => {
                
            let tag_name = ''

            edge.node.tags.forEach((tag, index)=>{
                if(tag.includes("Tag:")){
                    tag_name = tag.substr(5, tag.length);
                }
            });

            return tag_name == tag
    
        })
        
        }else{
            // If 'All' tag
            ArrayForDisplay= posts;
        }
        

        // Set State
        ArrayLengthForDisplay = 0;
        ArrayForDisplay.length > postSize ? setShowButton(true) : setShowButton(false) 
        setPostSize(3);
        setSelectedQueryByChip(ArrayForDisplay);


    }

    const paginationHandler = () =>{

        //length
        ArrayLengthForDisplay = selectedQueryByChip.length - 1;
        console.log("Length: " + ArrayLengthForDisplay);

        if(ArrayLengthForDisplay == postSize ){
            console.log("false");
            setShowButton(false);
        }

        setPostSize(postSize + 1)
    }

    return(
    
        <div className="Blog">
            <h2 className="Blog__all">All Posts</h2>
        
            <div className="Blog__chips">
                <Chip 
                    label="All"
                    key="1"
                    size="medium"
                    clickable
                    onClick={(e)=>{
                        chipHandler('all')
                    }}
                    style={{ backgroundColor : ChipColor.All.color }}
                    className="Blog__chip"
                    
                />
                {
                tagsArray.map((data, index)=>{
                    return(
                    <Chip
                        key={index + 2}
                        label={data.key}
                        size="medium"
                        clickable
                        onClick={(e) =>{
                            chipHandler(data.key)
                        }}
                        style={{ backgroundColor : ChipColor[data.key].color }}
                        className="Blog__chip"
                    ></Chip>
                    )   
                })
                }
            </div>

            <Posts posts={selectedQueryByChip} size={postSize}/>

            <div className="Blog__button" style={ showButton? {display: 'grid'} : {display: 'none'} }>
                <Button 

                    variant="outlined" 
                    color="primary"
                    onClick={(e)=>{
                        paginationHandler()
                    }}
                >
                    Load More
                </Button>
            </div>
        </div>
    )
}
    

export default BlogChips;