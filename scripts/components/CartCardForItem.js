import React, { useState } from 'react'
import CartQty from './CartQty';
import ItemsRelation from '../static/ItemsRelation';
import MoneyFilter from '../utils/MoneyFilter';
import PriceSuffixFilter from '../utils/PriceSuffixFilter';
import UpdateCartAPI from '../api/UpdateCartAPI'

const CardCardForItem = ({item}) => {
    const [ update, setUpdate ] = useState(false)
    const [ itemStage, setItemStage ] = useState({})

    // Delete Handler
    const DeleteCartItemHandler = (id, handle) => {
        let stage = {}
        stage = {...stage, [id]: 0}
        
        ItemsRelation[handle].hasExtraItem ? 
        stage = {...stage, [ItemsRelation[handle].extraItem.variantId]: 0}
        :
        null

        setUpdate(true)   
        setItemStage(stage)
        //console.log("update : " + update)    

    } 

    return(
        <>
        <div className="cart__card">
            <div>
                <img src={item.image} alt={item.title}/>
            </div>
            <div>
                <h1>{item.title}</h1>
                <h3>
                    {MoneyFilter(item.price * item.quantity)}
                    {PriceSuffixFilter(ItemsRelation[item.handle].priceSuffix)}
                </h3>
                {
                    // Message
                    ItemsRelation[item.handle].hasMessage?
                    <p>{ItemsRelation[item.handle].message}</p>
                    :
                    null
                }
                
                {
                    // Main Item
                    !ItemsRelation[item.handle].isExtraItem?
                    <CartQty 
                        quantity={item.quantity}
                        id = {item.id}
                        hasExtraItem={ItemsRelation[item.handle].hasExtraItem}
                        handle = {item.handle}
                    />
                    : null
                }

                {
                    // Extra Item
                    !ItemsRelation[item.handle].isExtraItem?
                    <div  onClick={ ()=>{ DeleteCartItemHandler(item.id, item.handle) } }>[Delete]</div>
                    :
                    null
                }
            </div>
        </div>
    
        { update? 
                <UpdateCartAPI 
                    itemStage={itemStage} 
                    /> 
                : null 
        }
    
        </>
        
    )
}

export default CardCardForItem