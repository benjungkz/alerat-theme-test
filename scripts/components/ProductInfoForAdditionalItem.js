import React, { useState, useEffect } from 'react'
import ProductInfoExtraQty from './ProductInfoExtraQty';
import MoneyFilter from '../utils/MoneyFilter'
import { addItem, removeItem } from '../store/CartStore'
import { connect } from "react-redux"

const GET_PRODUCT_URL = '/products/'

const ProductInfoForAdditionalItem = ({item, properties, addItem, removeItem}) => {

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
        
    }

    const removeItemFromCartHandler = (item)=>{
        removeItem(item.variantId);
    }


    const getProductHandler = (handle) =>{

        fetch( GET_PRODUCT_URL + handle + '.js' )
            .then( res => res.json())
            .then(
                (result)=>{
                    console.log("Get API is success!")      
                    console.log(result)    
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
                onClick={()=>{checkedHandler()}}>{MoneyFilter(item.price)}</p>
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