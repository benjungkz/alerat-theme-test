import React, { useState, useEffect } from 'react'
import ProductInfoForOptionItem from './ProductInfoForOptionItem'
import ProductInfoForCustomAdditionalItem from './ProductInfoForCustomAdditionalItem'
import ProductInfoForNormalAdditionalItem from './ProductInfoForNormalAdditionalItem'
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

    const renderItemInfo = (productHandle) =>{
        switch(ProductRelation[productHandle].optionType){
            case 'custom':
                return <ProductInfoForOptionItem handle={productHandle}/>
            case 'normal':
                return <ProductInfoForVariantItem handle={productHandle}/>
            case 'single':
                return <h1>single</h1> 
        }
    }

    const renderAdditionalItemInfo = (productHandle) =>{
        switch(ProductRelation[productHandle].optionType){
            case 'custom':
                return <ProductInfoForCustomAdditionalItem handle={productHandle}/>
            case 'normal':
                return <ProductInfoForNormalAdditionalItem handle={productHandle}/>
            case 'single':
                return <ProductInfoForNormalAdditionalItem handle={productHandle}/>
        }
    } 

    return( 
            productHandle!= ''?
                <>
                    {
                        // Option menu
                        ProductRelation[productHandle].optionType != 'single' ?
                        <div className="productInfo__menu">
                            <h6 className="productInfo__title"> Payment Option</h6>
                            <img className="productInfo__image"
                                    src={CART_ARROW_ICON_URL} 
                                    alt="Show Product Options"
                                    />
                        </div>
                        : null
                    }


                    <div className="productOption__container">
                    {
                        // Option Section
                        renderItemInfo(productHandle)
                    }
                    </div>
                    
                    <ProductInfoQty handle={productHandle}/>
                    
                    {
                        // Additional item and service menu
                        ProductRelation[productHandle].hasAdditionalItem ?
                            <div className="productInfo__menu">
                                <h6 className="productInfo__title">Additional Item &amp; Service</h6>
                                <img className="productInfo__image"
                                    src={CART_ARROW_ICON_URL} 
                                    alt="Show Product Options"
                                />   
                            </div>
                        : 
                            null
                    }
                    
                    {
                         // Additional item and service section
                        renderAdditionalItemInfo(productHandle)
                    }

                    <ProductInfoAddToCart/>
                </>
            :
                null
    )   
}

export default ProductInfo;