import React, { useState, useEffect } from 'react'
import CartCardList from '../components/CartCardList'
import { connect } from "react-redux"
import { get } from '../store/CartStore';

const UPDATE_URL = "/cart/update.js"

const UpdateCartAPI = ({ getItems, itemStage}) => {

    
    // Update Handelr
    const updateCartHandler = () =>{
        const updateCartOption ={
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
               updates: itemStage
            })
        }    
    
        fetch( UPDATE_URL, updateCartOption )
            .then( res => res.json())
            .then(
                (result)=>{
                    console.log(result.items);
                    
                    // State(redux)
                    getItems(result.items)

                },

                (error)=>{
                    console.log(error)
                }
            )
    }

    // init
    useEffect(()=>{
        updateCartHandler();
    }, [itemStage])

    return(
      null
    )


}

// Map 'new redux state by dispath' to componet props 
function mapDispatchToProps( dispatch ){
    return{
        getItems: (items)=>dispatch(get(items))
    }
}

export default connect( null ,mapDispatchToProps ) (UpdateCartAPI);