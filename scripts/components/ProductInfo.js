import React, { useState, useEffect } from 'react'
import ProductInfoForOptionItem from './ProductInfoForOptionItem'
import ProductInfoForAdditional from './ProductInfoForAdditional'
import ProductInfoQty from './ProductInfoQty';
import AddCartAPI from '../api/AddCartAPI'
import { connect } from 'react-redux';

// Needs change and it depends on product page url
const PRODUCT_URL = 'alerta-find-subscription';

const ProductInfo = ({itemStage}) => {
    const [checkout, setCheckout] = useState(false)
    
    useEffect(()=>{
        setCheckout(false)
    },[])

    const checkoutHandler = ()=>{
        setCheckout(true)
    }
    return(
            <>
                <ProductInfoForOptionItem handle={PRODUCT_URL}/>
                <ProductInfoQty handle={PRODUCT_URL}/>
                <ProductInfoForAdditional handle={PRODUCT_URL}/>
                <button className="addCartBtn" onClick={checkoutHandler}>Add Cart</button>
                {
                    checkout?
                    <AddCartAPI
                        itemStage={itemStage}/>
                    :
                    null
                }
            </>
    )   
}

const mapStateToProps = state => ({itemStage: state})

export default connect(mapStateToProps, null) (ProductInfo);