import React, { useEffect } from 'react'

const GET_PRODUCT_URL = '/products/'

const GetProductAPI = ({ handle }) => {


    const getProductHandler = () =>{

        fetch( GET_PRODUCT_URL, handle )
            .then( res => res.json())
            .then(
                (result)=>{
                    console.log(result)             
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


export default GetProductAPI