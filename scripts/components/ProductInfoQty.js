import React, { useState, useEffect } from 'react'
import { addItem, removeItem, updateItem } from '../store/CartStore'
import { connect } from "react-redux"

const ProductQty = ({id, quantity, addItem, removeItem, updateItem }) => {
    const [ qty, setQty ] = useState(0);  

    useEffect(()=>{
        console.log(quantity);
        setQty(quantity)
    },[])

    // Plus handler
    const plusHandler = () => {
        // Change qty
        setQty(qty + 1) 
        
        console.log(qty)

        // Update Cart
        updateItemFromCartHandelr(true);

    }

    // Minus handler
    const minusHandler = () => {
        if( qty > 1){
            // Minus qty
            setQty(qty - 1)
            updateItemFromCartHandelr(false);
        }
    }

    // Cart Handler
    const updateItemFromCartHandelr = (isPlus)=>{
        let quantity;
        isPlus ?  quantity = qty + 1 : quantity = qty - 1
        const setItem = {
            id: id,
            quantity: quantity
        }
        updateItem(setItem);
    }
  
    return(
        <div className="cart__input">
            <div className="cart__minus" onClick={()=>{minusHandler()}}>-</div>    
             <p className="cart__qty">{qty}</p>
            <div className="cart__plus" onClick={()=>{plusHandler()}}>+</div>
        </div>

    )
}

function mapDispatchToProps( dispatch ){
    return{
        addItem: (item)=>dispatch(addItem(item)),
        removeItem: (id)=>dispatch(removeItem(id)),
        updateItem: (item)=>dispatch(updateItem(item))
    }
}


export default  connect(null, mapDispatchToProps) (ProductQty)