import React, { useState, useEffect } from 'react'
import { addItem, selectVriantItem } from '../store/CartStore'
import { connect } from "react-redux"
import ProductRelation from '../static/ProductRelation'

const GET_PRODUCT_URL = '/products/'

const ProductInfoForSingleItem = ({handle, addItem, setSelectedSingleItemId}) => {

    useEffect(()=>{
        getVariantIdHandler()
    ,[handle]})

    //Handler
    const getVariantIdHandler = () =>{
        fetch( GET_PRODUCT_URL + handle + '.js' )
        .then( res => res.json())
        .then(
            (result)=>{
                // Add initial value to the stage
                addInitialSingleItemToCartHandelr(result.variants[0].id)

                // update state for cart
                setSelectedSingleItemId(result.variants[0].id)
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    const addInitialSingleItemToCartHandelr = (initialSingleItmeId) => {
        // issubscription?
        let productStage;
        ProductRelation[handle].options[0].isSubscription ?
            productStage = 
            {
                id: initialSingleItmeId,
                quantity: 1
            }
        :
            productStage = 
            {
                id: initialSingleItmeId,
                quantity: 1,
                properties: ProductRelation[handle].options[0].properties
            }

        addItem(productStage)
    }
    
    return(
        null
    )
}

function mapDispatchToProps( dispatch ){
    return{
        addItem: (item)=>dispatch(addItem(item)),
        setSelectedSingleItemId: (id)=>dispatch(selectVriantItem(id)),
    }
}


export default connect( null, mapDispatchToProps )(ProductInfoForSingleItem);