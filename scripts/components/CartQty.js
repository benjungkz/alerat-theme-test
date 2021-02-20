import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { remove } from '../store/CartStore'
import ItemsRelation from '../static/ItemsRelation'
import UpdateCartAPI from '../api/UpdateCartAPI'

const CartQty = ({id, quantity, handle, hasExtraItem}) => {
    const [ qty, setQty ] = useState(0);  
    const [ update, setUpdate ] = useState(false)
    const [ itemStage, setItemStage ] = useState({})

    useEffect(()=>{
        console.log(quantity);
        setQty(quantity)
        
    },[])

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
            // Delelte Cart
            setUpdate(true);
            setQty(0);
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
            <div className="cart__minus" onClick={()=>{minusHandler()}}>-</div>    
            
            { update? 
                <UpdateCartAPI 
                    itemStage={itemStage} 
                            /> 
                : null 
            }
             
             <p className="cart__qty">{qty}</p>
            <div className="cart__plus" onClick={()=>{plusHandler()}}>+</div>
        </div>

    )
}

// function mapDispatchToProps( dispath, ownProps ){
//     return{
//         isQtyZero : () => dispath(remove(ownProps.id))
//     }
// }

//export default connect(null, mapDispatchToProps)  (CartQty)

export default CartQty

// product와 extra 로직 필요