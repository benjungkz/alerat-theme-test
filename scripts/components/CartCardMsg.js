import ItemsRelation from '../static/ItemsRelation';
import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser';

const CartCardMsg = ({handle}) => {
    return(
        <div className="cart__msg">
            {parse(ItemsRelation[handle].message)}
        </div>
    )
}

export default CartCardMsg