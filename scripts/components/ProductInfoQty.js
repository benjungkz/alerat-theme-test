import React, { useState, useEffect } from 'react'
import ProductRelation from '../static/ProductRelation';
import { addItem, updateItem } from '../store/CartStore'
import { connect } from "react-redux"

const ProductQty = ({ handle, addItem, updateItem }) => {
    const [ qty, setQty ] = useState(1);
    
    useEffect(()=>{
        addItemToCartHandelr();
    },[])

    // Plus handler
    const plusHandler = () => {
        // Change qty
        setQty(qty + 1) 
        updateItemToCartHandler(qty + 1)
    }

    // Minus handler
    const minusHandler = () => {
        if( qty > 1){
            // Minus qty
            setQty(qty - 1)
            updateItemToCartHandler(qty - 1)
        }

    }

    // Cart Handler
    const addItemToCartHandelr = ()=>{

        const { variantId, properties, extraItem, isSubscription, isExtraItem } = ProductRelation[handle].options.filter(option=>option.handle == handle)[0]
        
        const productStage = 
        
        isSubscription? 
        {
            id: variantId,
            quantity: qty,
            properties: properties
        }
        :
        {
            id: variantId,
            quantity: qty
        }

        const extraItemStage = 

        isExtraItem?
        {
            id: extraItem.variantId,
            quantity: qty,
        }
        :
        null

        addItem([productStage, extraItemStage])
    }

    const updateItemToCartHandler = (qty) => {
           
        const { variantId, properties, extraItem, isSubscription, isExtraItem } = ProductRelation[handle].options.filter(option=>option.handle == handle)[0]
        
        const productStage = 
        
        isSubscription? 
        {
            id: variantId,
            quantity: qty,
            properties: properties
        }
        :
        {
            id: variantId,
            quantity: qty
        }

        const extraItemStage = 

        isExtraItem?
        {
            id: extraItem.variantId,
            quantity: qty,
        }
        :
        null

        console.log(productStage);

        updateItem(productStage)
        updateItem(extraItemStage)
    }
  
    return(
        <div className="cart__input cart__input--info">
            <div className="cart__minus" onClick={()=>{minusHandler()}}>-</div>    
             <p className="cart__qty">{qty}</p>
            <div className="cart__plus" onClick={()=>{plusHandler()}}>+</div>
        </div>

    )
}

function mapDispatchToProps( dispatch ){
    return{
        addItem: (item)=>dispatch(addItem(item)),
        updateItem: (item)=>dispatch(updateItem(item))
    }
}


export default  connect(null, mapDispatchToProps) (ProductQty)