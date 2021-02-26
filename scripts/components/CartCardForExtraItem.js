import React, { useState, useEffect } from 'react'
import MoneyFilter from '../utils/MoneyFilter';
import PriceSuffixFilter from '../utils/PriceSuffixFilter';
import ItemsRelation from '../static/ItemsRelation';

const GET_PRODUCT_URL = '/products/'

const CartCardForExtraItem  = ({ mainItemHandle, extraItemHandle}) => {
    // State
    const [ extraItemInfo, setExtraItemInfo ] = useState(null);


    // Get reccuring item handler
    const getProductHandler = (mainItemHandle, extraItemHandle) =>{
        if( ItemsRelation[mainItemHandle].hasExtraItem){
            fetch(GET_PRODUCT_URL + extraItemHandle + '.js')
                .then( res => res.json())
                .then(
                    (result)=>{
                        console.log(result)
                        setExtraItemInfo(result);
                    },
                    (error)=>{
                        console.log(error)
                    })
        }else{
            console.log("No extra item")
            setExtraItemInfo(null);
        }
    }

    // Get reccuring item
    useEffect(()=>{
        getProductHandler(mainItemHandle, extraItemHandle);
    
    },[]);

    
    return(
        extraItemInfo != null ? 
        <div className="cart__card cart__card--extra">
            <div>
                <img className="cart__image" src={extraItemInfo.images} alt={extraItemInfo.title}/>
            </div>
            <div>
                <h2 className="cart__title">{extraItemInfo.title}</h2>
                <h3 className="cart__price">
                    {MoneyFilter(extraItemInfo.price)}
                    {PriceSuffixFilter(ItemsRelation[mainItemHandle].extraItem.priceSuffix)}
                </h3>
            </div>
            <img 
                className="cart__connecter"
                src="https://cdn.shopify.com/s/files/1/1661/6207/files/cart-connecter-normal.png" 
                alt="Subsciption Extra Item"/>
        </div>
        :
        null

    )

}

export default CartCardForExtraItem;