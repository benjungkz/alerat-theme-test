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
                <img src={extraItemInfo.images} alt={extraItemInfo.title}/>
            </div>
            <div>
                <h1>{extraItemInfo.title}</h1>
                <h3>
                    {MoneyFilter(extraItemInfo.price)}
                    {PriceSuffixFilter(ItemsRelation[mainItemHandle].extraItem.priceSuffix)}
                </h3>
            </div>
        </div>
        :
        null

    )

}

export default CartCardForExtraItem;