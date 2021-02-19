import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { remove } from '../store/CartStore'
import UpdateCartAPI from '../api/UpdateCartAPI'

const CartQty = ({id, quantity }) => {
    const [ qty, setQty ] = useState(0);  
    const [ update, setUpdate ] = useState(false)

    useEffect(()=>{
        console.log(quantity);
        setQty(quantity)
    },[])

    // Plus handler
    const plusHandler = () => {
        // Change qty
        setQty(qty + 1)
            
        // Update Cart
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
            setUpdate(true);
            setQty(qty - 1)
        }
    }
  
    return(
        <div className="cart__input">
            <div className="cart__minus" onClick={()=>{minusHandler()}}>-</div>    
            
            { update? 
                <UpdateCartAPI 
                    id={id} 
                    qty={qty} 
                            /> 
                : null }
             
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