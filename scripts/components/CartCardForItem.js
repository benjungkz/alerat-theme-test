import React, { useState } from 'react'
import CartQty from './CartQty';
import CartCardForRecurringDate from './CartCardForRecurringDate'
import ItemsRelation from '../static/ItemsRelation';
import MoneyFilter from '../utils/MoneyFilter';
import PriceSuffixFilter from '../utils/PriceSuffixFilter';
import CartCardMsg from './CartCardMsg'
import UpdateCartAPI from '../api/UpdateCartAPI'

const CART_BTN_DELETE_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/cart-btn-delete.png'

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
    } 

    // Item Class name Handler 
    const ItemClassNameHandler = (item) =>{
        let itemClass;
        ItemsRelation[item.handle].isExtraItem?
            itemClass = '--extra'
        :
            itemClass = '--normal'        
        return itemClass
    }

    return(
        <>
        <div className={'cart__card cart__card' + ItemClassNameHandler(item)}>
            <div className="cart__wrap cart__wrap--media">
                <img className="cart__image" src={item.image} alt={item.title}/>
            </div>
            <div className={'cart__wrap cart__wrap' + ItemClassNameHandler(item)}>
                {
                    // Delete btn
                    !ItemsRelation[item.handle].isExtraItem?
                    <div className="cart__btn cart__btn--delete"
                        onClick={ ()=>{ DeleteCartItemHandler(item.id, item.handle) } }>
                        <img 
                            className="cart__image cart__image--btn" 
                            src={CART_BTN_DELETE_URL} 
                            alt="Please click the button if you want to delete the item from the cart"/> 
                    </div>
                    :
                    null
                }
                <h3 className="cart__title">{item.title}</h3>
                <h4 className="cart__price">
                    {MoneyFilter(item.price * item.quantity)}
                    {PriceSuffixFilter(ItemsRelation[item.handle].priceSuffix)}
                </h4>
                {
                    // Message
                    ItemsRelation[item.handle].hasMessage?
                    <CartCardMsg handle={item.handle}/>
                    :
                    null
                }
                <CartCardForRecurringDate
                        isSubscription={ItemsRelation[item.handle].isSubscription}
                        subscriptionDuration={ItemsRelation[item.handle].subscriptionDuration}
                    />
                {
                    // Qty
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
                    //Conneter
                    ItemsRelation[item.handle].isExtraItem?
                    <img 
                        className="cart__connecter cart__connecter--extra"
                        src="https://cdn.shopify.com/s/files/1/1661/6207/files/cart-connecter-normal.png" 
                        alt="Subsciption Extra Item"/>
                    : null
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