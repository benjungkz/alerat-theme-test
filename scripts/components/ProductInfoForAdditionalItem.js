import React, { useState, useEffect } from 'react'
import ProductInfoExtraQty from './ProductInfoExtraQty';
import MoneyFilter from '../utils/MoneyFilter'
import { addItem, removeItem } from '../store/CartStore'
import { connect } from "react-redux"

const ProductInfoForAdditionalItem = ({item, addItem, removeItem}) => {

    const [checked, setChecked] = useState(false)
   

    useEffect(()=>{
        checked?
        addItemToCartHandler(item)
        :
        removeItemFromCartHandler(item)
    },[checked])


    //Handeler
    const checkedHandler= (e) => {
        setChecked(e.target.checked)
    }

    const addItemToCartHandler = (item)=>{
        const additionalItem = {
            id: item.variantId,
            quantity: 1
        }

        addItem(additionalItem);
        
    }

    const removeItemFromCartHandler = (item)=>{
        removeItem(item.variantId);
    }

    return(
       <div>
            <input 
                type="checkbox" 
                name={item.type} 
                value={item.name}
                checked={checked}
                onChange={checkedHandler}
                className="productOption__checkbox"
                />
            <label className="productOption__label" htmlFor={item.type}>{item.name}</label>
            <p className="productOption__price productOption__price--small">{MoneyFilter(item.price)}</p>
            <ProductInfoExtraQty
                id={item.variantId}
                quantity={1}
            />
          
            {/* { 
                checked?
                addItemToCartHandler(item)
                :
                removeItemFromCartHandler(item)
                
            } */}
       </div>
    )
}

function mapDispatchToProps( dispatch ){
    return{
        addItem: (item)=>dispatch(addItem(item)),
        removeItem: (id)=>dispatch(removeItem(id))
    }
}

export default connect(null, mapDispatchToProps) (ProductInfoForAdditionalItem);