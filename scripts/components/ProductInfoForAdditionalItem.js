import React, { useState, useEffect } from 'react'
import ProductInfoQty from './ProductInfoQty';
import MoneyFilter from '../utils/MoneyFilter'
import { addItem, removeItem } from '../store/CartStore'
import { connect } from "react-redux"

const ProductInfoForAdditionalItem = ({item, addItem, removeItem}) => {

    const [checked, setChecked] = useState(false)


    //Handeler
    const checkedHandler= (e) => {
        setChecked(e.target.checked)
        console.log('checkedHandler')
    }

    const addItemToCartHandler = (variantId)=>{
        const additionalItem = {
            id: variantId,
            quantity: 1
        }

        addItem(additionalItem);
        
    }

    const removeItemFromCartHandler = (variantId)=>{
        removeItem(variantId);
    }

    return(
       <div>
            <input 
                type="checkbox" 
                name={item.type} 
                value={item.name}
                checked={checked}
                onChange={checkedHandler}
                />
            <label htmlFor={item.type}>{item.name}</label>
            <p>{MoneyFilter(item.price)}</p>
            {
                checked?
                <ProductInfoQty
                    id={item.variantId}
                    quantity={1}
                />
                :
                null
            }
            { 
                checked?
                addItemToCartHandler(item.variantId)
                :
                removeItemFromCartHandler(item.variantId)
                
            }
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