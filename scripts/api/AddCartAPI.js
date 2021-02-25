import React, { useEffect } from 'react'
import { get } from '../store/CartStore'
import { connect } from 'react-redux';

const ADD_URL = '/cart/add.js'
const GET_URL = "/cart.js"

const AddCartAPI = ({ itemStage, getItems }) => {

    useEffect(()=>{
        AddCartHandler();     
    },[itemStage])

    const getHandler = () =>{
        fetch(GET_URL)
            .then( res => res.json())
            .then(
                (result)=>{
                    console.log("Get is complete from Add") 
                    getItems(result.items)

                },
                (error)=>{
                    console.log(error)
                }
            )
    }

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
                    console.log("Add is complete")    
                    // Get Cart
                    getHandler();                
                },

                (error)=>{
                    console.log(error)
                }
            
            )
    }

    return(
        null
    )
}


//Map 'new redux state by dispath' to componet props 
const mapDispatchToProps = dispatch => ({
    getItems: (items)=>dispatch(get(items))
})
export default connect(null, mapDispatchToProps)(AddCartAPI)
