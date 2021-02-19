import React, { useState, useEffect } from 'react'
import ProductInfoForOptionItem from './ProductInfoForOptionItem'
import ProductInfoForAdditional from './ProductInfoForAdditional'

// Needs change and it depends on product page url
const PRODUCT_URL = 'alerta-find-subscription';

const ProductInfo = () => {
    return(
            <>
                <ProductInfoForOptionItem
                    handle={PRODUCT_URL}
                />

                <ProductInfoForAdditional
                    handle={PRODUCT_URL}
                />
            </>
    )   
}

export default ProductInfo;