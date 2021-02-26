import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import MoneyFilter from '../utils/MoneyFilter'

const EXCEPTOIN_ITEM_HANDLE = "alerta-find-subscription"

const CartAddButton = ({cartItem}) =>{
    const [ total, setTotal ] = useState(0)

    useEffect(()=>{
        totalHandler()
    },[cartItem])

    const totalHandler=()=>{
        let total = 0;
        cartItem.forEach(item => {
            if(item.handle != EXCEPTOIN_ITEM_HANDLE)
            total = total + (item.quantity * item.price);
        });
        
        setTotal(MoneyFilter(total))
    }

    return(
        <input 
            className="cart__checkout btn btn--checkout" 
            type="submit" 
            name="checkout" 
            value={
                total + ' - CHECKOUT'}/>
    )


}

// // Map redux state to componet props
const mapStateToProps = state =>( { cartItem : state.cartItem } )

export default connect(mapStateToProps, null) (CartAddButton)