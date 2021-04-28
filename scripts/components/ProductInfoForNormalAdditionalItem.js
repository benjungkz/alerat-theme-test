import React, { useEffect } from 'react'
import ProductInfoForAdditionalItem from './ProductInfoForAdditionalItem'
import ProductRelation from '../static/ProductRelation';


const ProductInfoForNormalAdditionalItem = ({handle}) => {
    
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
                        suffix={item.isSubscription? item.suffix : ''}
                    />
                )
            })
        :
            null
    )
}

export default ProductInfoForNormalAdditionalItem;