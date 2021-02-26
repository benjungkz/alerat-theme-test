import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { get } from '../store/CartStore';


const GET_URL = "/cart.js"

const GetCartAPI = ({ getItems }) => {
    
    // Fetch Handler
    const getCartHandler = () =>{
        fetch(GET_URL)
            .then( res => res.json())
            .then(
                (result)=>{
                    getItems(result.items)

                },
                (error)=>{
                    console.log(error)
                }
            )
    }

    //componenDidMount (one-time)
    useEffect(()=>{
        getCartHandler()
    }, [getItems])
    
    return(
        null
    )
}

const mapDispatchToProps = dispatch => ({
    getItems: (items)=>dispatch(get(items))
})


export default connect(null, mapDispatchToProps)(GetCartAPI)