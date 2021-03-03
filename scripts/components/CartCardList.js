import React, { useEffect } from 'react'
import CartCardForItem from './CartCardForItem';
import ItemsRelation from '../static/ItemsRelation';
import CartCardForNote from './CartCardForNote';
import { connect } from "react-redux"

const CartCardList = ({cartItem}) => {

    return(
        cartItem.length > 0 ?
        cartItem.map( (item, index) => {
            return(
                <div key={index} className="cart__group">
                    <CartCardForItem item={item}/>            
                    {
                        ItemsRelation[item.handle].hasNote ?
                        <CartCardForNote
                            mainItemHandle={item.handle}/>
                        :
                        null
                        
                    }
                </div>
            )
        }) 
        :
        
        <h1 className="cart__empty">Cart is empty 🛒</h1>
       
    )
}

const mapStateToProps = state =>( { cartItem : state.cartItem } )

export default connect(mapStateToProps,null)(CartCardList);
