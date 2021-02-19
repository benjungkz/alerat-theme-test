import React, { useState, useEffect } from 'react'
import ProductInfoForAdditionalItem from './ProductInfoForAdditionalItem'
import ProductRelation from '../static/ProductRelation';


const ProductInfoForAdditional = ({handle}) => {

    const { additionalItems } =  ProductRelation[handle].options.filter(option=>option.handle == handle)[0]

    useEffect(()=>{
        console.log(additionalItems);
        console.log(typeof additionalItems);
    },[])

    return(
        
        additionalItems.map((item, index)=>{
            return(
                <ProductInfoForAdditionalItem
                    key={index}
                    item={item}
                />
            )
        })
    )
}

export default ProductInfoForAdditional;