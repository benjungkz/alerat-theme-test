import React, { useState, useEffect } from 'react'
import ProductInfoForOptionItem from './ProductInfoForOptionItem'
import ProductInfoForAdditional from './ProductInfoForAdditional'
import ProductInfoQty from './ProductInfoQty';
import ProductInfoAddToCart from './ProductInfoAddToCart';

// Needs change and it depends on product page url
const PRODUCT_URL = 'alerta-find-subscription';

const ProductInfo = () => {
    
    return(
            <>
                <div className="productInfo__menu">Payment Option</div>
                <ProductInfoForOptionItem handle={PRODUCT_URL}/>
                <ProductInfoQty handle={PRODUCT_URL}/>

                <div className="productInfo__menu">Additional &amp; Service </div>
                <ProductInfoForAdditional handle={PRODUCT_URL}/>
                <ProductInfoAddToCart/>
            </>
    )   
}

export default ProductInfo;