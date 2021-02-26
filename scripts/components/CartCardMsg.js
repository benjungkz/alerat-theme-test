import ItemsRelation from '../static/ItemsRelation';
import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser';

const CartCardMsg = ({handle}) => {
    useEffect(()=>{
        console.log(ItemsRelation[handle].message)
        console.log(typeof ItemsRelation[handle].message)
    })
    return(
        <div className="cart__msg">
            {parse(ItemsRelation[handle].message)}
        </div>
    )
}

export default CartCardMsg