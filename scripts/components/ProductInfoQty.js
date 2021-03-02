import React, { useState, useEffect } from 'react'
import ProductRelation from '../static/ProductRelation';
import { addItem, updateItem } from '../store/CartStore'
import { connect } from "react-redux"

const ProductQty = ({ handle, addItem, updateItem, selectedVariantItemId }) => {
    const [ qty, setQty ] = useState(1);
    
    useEffect(()=>{
        ProductRelation[handle].optionType == 'custom'?
            addItemToCartHandelr()
        :
            null
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

    /* Stage Handler: 
       Set initial value from custom option to stage */

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


        extraItemStage == null ? addItem([productStage]) : addItem([productStage, extraItemStage])
    }

    const updateItemToCartHandler = (qty) => {
        // Update state with custom option 
        if( ProductRelation[handle].optionType == 'custom'){
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
        // Update state with variant
        else{
            updateItem({
                id: selectedVariantItemId,
                quantity: qty
            })
        }
    }



    const updateVariantItemToCartHandler = () => {

    }


  
    return(
        <div className="cart__input cart__input--info">
            <div className="cart__minus" onClick={()=>{minusHandler()}}>-</div>    
             <p className="cart__qty">{qty}</p>
            <div className="cart__plus" onClick={()=>{plusHandler()}}>+</div>
        </div>

    )
}

const mapStateToProps = state => ({ 
    selectedVariantItemId : state.variantItem
})

function mapDispatchToProps( dispatch ){
    return{
        addItem: (item)=>dispatch(addItem(item)),
        updateItem: (item)=>dispatch(updateItem(item))
    }
}


export default  connect(mapStateToProps, mapDispatchToProps) (ProductQty)