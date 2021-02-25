import React, { useEffect } from 'react'
import ProductInfoForAdditionalItem from './ProductInfoForAdditionalItem'
import ProductRelation from '../static/ProductRelation';


const ProductInfoForAdditional = ({handle}) => {

    const { additionalItems } =  ProductRelation[handle].options.filter(option=>option.handle == handle)[0]

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