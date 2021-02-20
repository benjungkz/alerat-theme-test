import React, { useState, useEffect } from 'react'
import GetCartAPI from '../api/GetCartAPI';

const ADD_URL = '/cart/add.js'
const AddCartAPI = ({itemStage}) => {
    const [add, setAdd ] = useState(false)
    
    useEffect(()=>{
        console.log(itemStage);
        AddCartHandler();

    },[])
    const AddCartHandler = () =>{
        const AddCartOption ={
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
               items: itemStage
            })
        }

        fetch( ADD_URL, AddCartOption )
            .then( res => res.json())
            .then(
                (result)=>{
                    console.log(result.items);
                    setAdd(true)
                },

                (error)=>{
                    console.log(error)
                }
        )
    }
    return(
        add?
        <GetCartAPI/>
        :
        null
        
    )
}

export default AddCartAPI;
