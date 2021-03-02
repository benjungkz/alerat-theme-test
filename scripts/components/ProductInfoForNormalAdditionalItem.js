import React, { useEffect } from 'react'
import ProductInfoForAdditionalItem from './ProductInfoForAdditionalItem'
import ProductRelation from '../static/ProductRelation';


const ProductInfoForNormalAdditionalItem = ({handle}) => {

    useEffect(()=>{
        console.log(ProductRelation[handle].options[0])
        console.log(ProductRelation[handle])
    },[])
    
    const { additionalItems } =  ProductRelation[handle].options[0]
    const { hasAdditionalItem } = ProductRelation[handle]
    
    return(
       hasAdditionalItem?
            additionalItems.map((item, index)=>{
                return(
                    <ProductInfoForAdditionalItem
                        key={index}
                        properties={item.properties}
                        item={item}
                    />
                )
            })
        :
            null
    )
}

export default ProductInfoForNormalAdditionalItem;