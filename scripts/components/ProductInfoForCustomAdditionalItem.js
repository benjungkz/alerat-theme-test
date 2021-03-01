import React, { useEffect } from 'react'
import ProductInfoForAdditionalItem from './ProductInfoForAdditionalItem'
import ProductRelation from '../static/ProductRelation';


const ProductInfoForCustomAdditionalItem = ({handle}) => {

    
    const { additionalItems } =  ProductRelation[handle].options.filter(option=>option.handle == handle)[0]
    const { hasAdditionalItem } = ProductRelation[handle].hasAdditionalItem
   
    return(
        hasAdditionalItem?
            additionalItems.map((item, index)=>{
                return(
                    <ProductInfoForAdditionalItem
                        key={index}
                        item={item}
                        properties={item.properties}
                    />
                )
            })
        :
            null
    )
}

export default ProductInfoForCustomAdditionalItem;