import React, { useState, useEffect } from 'react'
import ProductInfoForOptionItem from './ProductInfoForOptionItem'
import ProductInfoForSingleItem from './ProductInfoForSingleItem'
import ProductInfoForVariantItem from './ProductInfoForVariantItem';
import ProductInfoForCustomAdditionalItem from './ProductInfoForCustomAdditionalItem'
import ProductInfoForNormalAdditionalItem from './ProductInfoForNormalAdditionalItem'
import ProductInfoQty from './ProductInfoQty';
import ProductInfoAddToCart from './ProductInfoAddToCart';
import ProductRelation from '../static/ProductRelation'

const CART_ARROW_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/cart-arrow-down.png'

const ProductInfo = () => {
    const [ productHandle, setProductHandle ] = useState('')
    const [ openOption, setOpenOption ] = useState(true)
    const [ openAddition, setOpenAddition ] = useState(true)

    useEffect(()=>{
        productUrlHandler()
    },[])
    
    const productUrlHandler = () =>{
        // let path = window.location.pathname
        // let pathNames = path.split('/')
        // path.search('products') != -1 ? setProductHandle(pathNames[2]) : null

        //TEST
        setProductHandle('alerta-find-subscription')
    }

    const openOptionHandelr = () =>{
        console.log("openOptionHandelr")
        openOption? setOpenOption(false) : setOpenOption(true)
    }

    const openAddtionHandler = ()=>{
        openAddition? setOpenAddition(false) : setOpenAddition(true)
    }

    const renderItemInfo = (productHandle) =>{
        switch(ProductRelation[productHandle].optionType){
            case 'custom':
                return <ProductInfoForOptionItem handle={productHandle}/>
            case 'normal':
                return <ProductInfoForVariantItem handle={productHandle}/>
            case 'single':
                return <ProductInfoForSingleItem handle={productHandle} />
        }
    }

    const renderAdditionalItemInfo = (productHandle) =>{
        console.log(ProductRelation[productHandle].optionType)
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
                        <div className='productInfo__menu'
                            onClick={()=>{
                                openOptionHandelr()
                            }}>
                            <h6 className="productInfo__title"> Payment Option</h6>
                            <img className="productInfo__image"
                                    src={CART_ARROW_ICON_URL} 
                                    alt="Show Product Options"
                                    />
                        </div>
                        : null
                    }


                    <div className={openOption? 'productOption__container--active' : 'productOption__container'}>
                    {
                        // Option Section
                        renderItemInfo(productHandle)
                    }
                    </div>
                    
                    <ProductInfoQty handle={productHandle}/>
                    
                    {
                        // Additional item and service menu
                        ProductRelation[productHandle].hasAdditionalItem ?
                            <div className="productInfo__menu"
                                onClick={()=>{
                                    openAddtionHandler()
                                }}>
                                <h6 className="productInfo__title">Additional Item &amp; Service</h6>
                                <img className="productInfo__image"
                                    src={CART_ARROW_ICON_URL} 
                                    alt="Show Product Options"
                                />   
                            </div>
                        : 
                            null
                    }
                    <div className={openAddition? 'productOption__container--active' : 'productOption__container'}>
                        {    // Additional item and service section
                            renderAdditionalItemInfo(productHandle)
                        }
                    </div>
                    <ProductInfoAddToCart/>
                </>
            :
                null
    )   
}

export default ProductInfo;