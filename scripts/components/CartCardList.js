import React, { useState, useEffect } from 'react'
import CartCardForItem from '../components/CartCardForItem';
import ItemsRelation from '../static/ItemsRelation';
import CartCardForExtraItem from '../components/CartCardForExtraItem';
import CartCardForNote from '../components/CartCardForNote';


const CartCardList = ({cartCardList}) => {
    useEffect(()=>{
        console.log(cartCardList)
    })
    return(
        
        cartCardList.map( (item, index) => {
            return(
            
                // Need flag for <CartCardForItem>
                <div key={index} className="cart__group">
                    <CartCardForItem item={item}/>            
                      
                    {
                        ItemsRelation[item.handle].hasExtraItem ?
                        <CartCardForExtraItem 
                            mainItemHandle={item.handle}
                            extraItemHandle={ItemsRelation[item.handle].extraItem.handle} />
                        :
                        null
                    }   
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


export default CartCardList;