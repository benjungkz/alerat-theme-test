import React, { useState, useEffect } from 'react'
import ItemsRelation from '../Static/ItemsRelation'
import { updateItem } from '../store/CartStore'
import { connect } from "react-redux"

const ProductInfoExtraQty = ({id, quantity, handle, properties, updateItem }) => {
    const [ qty, setQty ] = useState(0);  

    useEffect(()=>{
        setQty(quantity)
    },[])

    // Plus handler
    const plusHandler = () => {
        // Change qty
        setQty(qty + 1) 
        updateItemFromCartHandelr(true)
    }

    // Minus handler
    const minusHandler = () => {
        if( qty > 1){
            // Minus qty
            setQty(qty - 1)
            updateItemFromCartHandelr(false)
        }
    }

    // Cart Handler
    const updateItemFromCartHandelr = (isPlus)=>{
        let quantity;
        isPlus ?  quantity = qty + 1 : quantity = qty - 1
        
        properties == null?
                updateItem({
                    id: id,
                    quantity: quantity
                })
            :
                updateItem({
                    id: id,
                    quantity: quantity,
                    properties: properties
                })


        // Update the extra Item
        ItemsRelation[handle].hasExtraItem ?
                updateItem({
                    id: ItemsRelation[handle].extraItem.variantId,
                    quantity: quantity
                })
            :
                null
    }
  
    return(
        <div className="cart__input cart__input--small">
            <div className="cart__minus cart__minus--small" onClick={()=>{minusHandler()}}>-</div>    
             <p className="cart__qty cart__qty--small">{qty}</p>
            <div className="cart__plus cart__plus--small" onClick={()=>{plusHandler()}}>+</div>
        </div>

    )
}

function mapDispatchToProps( dispatch ){
    return{
        updateItem: (item)=>dispatch(updateItem(item))
    }
}


export default  connect(null, mapDispatchToProps) (ProductInfoExtraQty)

