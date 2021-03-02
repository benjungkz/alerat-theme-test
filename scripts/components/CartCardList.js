import React, { useEffect } from 'react'
import CartCardForItem from '../components/CartCardForItem';
import ItemsRelation from '../static/ItemsRelation';
import CartCardForNote from '../components/CartCardForNote';
import { connect } from "react-redux"

const CartCardList = ({cartItem}) => {

    return(
        
        cartItem.map( (item, index) => {
            console.log(item)
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
    )
}

const mapStateToProps = state =>( { cartItem : state.cartItem } )

export default connect(mapStateToProps,null)(CartCardList);
