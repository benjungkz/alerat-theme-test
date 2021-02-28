import React, { useState, useEffect } from 'react'
import ProductInfoForOptionItem from './ProductInfoForOptionItem'
import ProductInfoForAdditional from './ProductInfoForAdditional'
import ProductInfoQty from './ProductInfoQty';
import ProductInfoAddToCart from './ProductInfoAddToCart';
import ProductRelation from '../static/ProductRelation'
import ProductInfoForVariantItem from './ProductInfoForVariantItem';

const CART_ARROW_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/cart-arrow-down.png'

const ProductInfo = () => {
    const [ productHandle, setProductHandle ] = useState('')

    useEffect(()=>{
        productUrlHandler()
    },[])
    
    const productUrlHandler = () =>{
        let path = window.location.pathname
        let pathNames = path.split('/')
        console.log(path.search('products'));
        console.log(pathNames[2])
        path.search('products') != -1 ? setProductHandle(pathNames[2]) : null
    }

    return( 
            productHandle!= ''?
                <>
                    <div className="productInfo__menu">
                        <h6 className="productInfo__title"> Payment Option</h6>
                        <img className="productInfo__image"
                                src={CART_ARROW_ICON_URL} 
                                alt="Show Product Options"
                                />
                    </div>
                    
                    <div className="productOption__container">
                        {
                        ProductRelation[productHandle].optionType != 'custom'?
                        <ProductInfoForVariantItem handle={productHandle}/>
                        :
                        <ProductInfoForOptionItem handle={productHandle}/>
                        }
                    </div>
                    
                    <ProductInfoQty handle={productHandle}/>

                    <div className="productInfo__menu">
                        <h6 className="productInfo__title">Additional &amp; Service</h6>
                        <img className="productInfo__image"
                            src={CART_ARROW_ICON_URL} 
                            alt="Show Product Options"
                        />   
                    </div>

                    {/* <ProductInfoForAdditional handle={productHandle}/> */}
                    
                    <ProductInfoAddToCart/>
                </>
            :
                null
    )   
}

export default ProductInfo;