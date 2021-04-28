import React, { useState, useEffect } from 'react'
import ProductInfoExtraQty from './ProductInfoExtraQty';
import MoneyFilter from '../utils/MoneyFilter'
import ItemsRelation from '../Static/ItemsRelation'
import { addItem, removeItem } from '../store/CartStore'
import { connect } from "react-redux"

const GET_PRODUCT_URL = '/products/'

const ProductInfoForAdditionalItem = ({item, properties, suffix, addItem, removeItem}) => {

    const [checked, setChecked] = useState(false)
    const [imgURL, setImgURL] = useState('');   

    useEffect(()=>{
        checked?
        addItemToCartHandler(item)
        :
        removeItemFromCartHandler(item)

        getProductHandler(item.handle)

    },[checked])


    //Handeler
    const checkedHandler= () => {
        checked? setChecked(false) : setChecked(true)
        //setChecked(e.target.checked)
    }

    const addItemToCartHandler = (item)=>{
        
        properties == null ?
        addItem({
            id: item.variantId,
            quantity: 1
        })
        :
        addItem({
            id: item.variantId,
            quantity: 1,
            properties: properties
        });

        // When a item has a extra item
        ItemsRelation[item.handle].hasExtraItem && ItemsRelation[item.handle].extraItem.properties == null?
        addItem({
            id: ItemsRelation[item.handle].extraItem.variantId,
            quantity: 1,
        })
        :
        null

        
    }

    const removeItemFromCartHandler = (item)=>{
        removeItem(item.variantId);

        // Remove the extra item
        ItemsRelation[item.handle].hasExtraItem?
        removeItem(ItemsRelation[item.handle].extraItem.variantId) : null
    }


    const getProductHandler = (handle) =>{

        fetch( GET_PRODUCT_URL + handle + '.js' )
            .then( res => res.json())
            .then(
                (result)=>{
                    setImgURL(result.featured_image) 
                },
                (error)=>{
                    console.log(error)
                }
            
            )
    }

    

    return(
       <div className="productOption__additional">
            <input 
                type="checkbox" 
                name={item.type} 
                value={item.name}
                checked={checked}
                onChange={checkedHandler}
                className="productOption__checkbox"
                />
              
            <img className="productOption__image productOption__image--small lazyload" 
                src={imgURL} 
                onClick={()=>{checkedHandler()}}

            />
            
            <label className="productOption__label" 
                htmlFor={item.type}
                onClick={()=>{checkedHandler()}}>{item.name}</label>
            
            <p className="productOption__price productOption__price--small"
                onClick={()=>{checkedHandler()}}
            >
                {MoneyFilter(item.price) + suffix}
            </p>

            <ProductInfoExtraQty
                id={item.variantId}
                quantity={1}
                handle={item.handle}
                properties={properties}
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