import React, { useState, useEffect } from 'react'
import ProductInfoForOptionItem from './ProductInfoForOptionItem'
import ProductInfoForAdditional from './ProductInfoForAdditional'
import ProductInfoQty from './ProductInfoQty';
import AddCartAPI from '../api/AddCartAPI'
import { connect } from 'react-redux';

// Needs change and it depends on product page url
const PRODUCT_URL = 'alerta-find-subscription';

const ProductInfo = ({addCartItems}) => {
    const [checkout, setCheckout] = useState(false)
    
    useEffect(()=>{
        setCheckout(false)
    },[checkout])

    const checkoutHandler = ()=>{
        setCheckout(true)
    }
    return(
            <>
                <div className="productInfo__menu">Payment Option</div>
                <ProductInfoForOptionItem handle={PRODUCT_URL}/>
                <ProductInfoQty handle={PRODUCT_URL}/>

                <div className="productInfo__menu">Additional &amp; Service </div>
                <ProductInfoForAdditional handle={PRODUCT_URL}/>
                <button 
                    className="productInfo__add" 
                    onClick={checkoutHandler}
                    >Add Cart </button>
                    {
                        checkout?
                        <AddCartAPI
                            itemStage={addCartItems}/>
                        :
                        null
                    }
                
            </>
    )   
}

const mapStateToProps = state => ({addCartItems: state.addCartItem})

export default connect(mapStateToProps, null) (ProductInfo);