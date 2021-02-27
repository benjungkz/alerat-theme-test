import React, { useState, useEffect } from 'react'
import ProductInfoForOptionItem from './ProductInfoForOptionItem'
import ProductInfoForAdditional from './ProductInfoForAdditional'
import ProductInfoQty from './ProductInfoQty';
import ProductInfoAddToCart from './ProductInfoAddToCart';

// Needs change and it depends on product page url
const PRODUCT_URL = 'alerta-find-subscription';
const CART_ARROW_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/cart-arrow-down.png'



const ProductInfo = () => {
   
    return(
            <>
                <div className="productInfo__menu">
                   <h6 className="productInfo__title"> Payment Option</h6>
                   <img className="productInfo__image"
                        src={CART_ARROW_ICON_URL} 
                        alt="Show Product Options"
                        />
                </div>
                
                <div className="productOption__container">
                    <ProductInfoForOptionItem handle={PRODUCT_URL}/>
                </div>
                
                <ProductInfoQty handle={PRODUCT_URL}/>

                <div className="productInfo__menu">
                    <h6 className="productInfo__title">Additional &amp; Service</h6>
                    <img className="productInfo__image"
                        src={CART_ARROW_ICON_URL} 
                        alt="Show Product Options"
                    />   
                </div>

                <ProductInfoForAdditional handle={PRODUCT_URL}/>
                
                <ProductInfoAddToCart/>
            </>
    )   
}

export default ProductInfo;