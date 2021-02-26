import React, { useState, useEffect } from 'react'
import ItemsRelation from '../static/ItemsRelation'
import UpdateCartAPI from '../api/UpdateCartAPI'

const CartQty = ({id, quantity, handle, hasExtraItem}) => {
    const [ qty, setQty ] = useState(0);  
    const [ update, setUpdate ] = useState(false)
    const [ itemStage, setItemStage ] = useState({})

    useEffect(()=>{
        setQty(quantity)
    },[quantity])

    // Plus handler
    const plusHandler = () => {
        // Change qty
        setQty(qty + 1)
            
        // Update Stage & Cart
        let stage = {}
        stage = {...stage, [id]: qty+1}
        
        hasExtraItem ? 
        stage = {...stage, [ItemsRelation[handle].extraItem.variantId]: qty+1}
        :
        null


        setItemStage(stage)
        setUpdate(true)
    }

    // Minus handler
    const minusHandler = () => {
        if( qty == 1){
            setQty(0);
            // Delelte Cart
             // Update Stage & Cart
             let stage = {}
             stage = {...stage, [id]: 0}
             
             hasExtraItem ? 
             stage = {...stage, [ItemsRelation[handle].extraItem.variantId]: 0 }
             :
             null
 
            setItemStage(stage)
            setUpdate(true);
          
        }else{
            // Minus qty
            setQty(qty - 1)

            // Update Stage & Cart
            let stage = {}
            stage = {...stage, [id]: qty-1}
            
            hasExtraItem ? 
            stage = {...stage, [ItemsRelation[handle].extraItem.variantId]: qty-1}
            :
            null

            setItemStage(stage)
            setUpdate(true);
            
        }
    }
  
    return(
        <div className='cart__input'>
            <p className="cart__minus" onClick={()=>{minusHandler()}}>-</p>    
            
            { update? 
                <UpdateCartAPI 
                    itemStage={itemStage} 
                            /> 
                : null 
            }
             
            <div className="cart__qty">
                <p>{qty}</p>
            </div>
            <p className="cart__plus" onClick={()=>{plusHandler()}}>+</p>
        </div>

    )
}

export default CartQty
