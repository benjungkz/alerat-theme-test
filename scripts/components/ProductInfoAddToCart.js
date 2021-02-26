import React, { useState, useEffect } from 'react'
import AddCartAPI from '../api/AddCartAPI'
import { connect } from 'react-redux';

const ProductInfoAddToCart = ({addCartItems}) => {
   
    const [checkout, setCheckout] = useState(false)
    
    useEffect(()=>{
        setCheckout(false)
    },[checkout])

    const checkoutHandler = ()=>{
        setCheckout(true)
    }

    return(
        <>
            <button 
                className="productInfo__add" 
                onClick={checkoutHandler}
                >Add Cart </button>
            {
                checkout? <AddCartAPI itemStage={addCartItems}/> : null
            }
        </>      
    )
}


const mapStateToProps = state => ({addCartItems: state.addCartItem})

export default connect(mapStateToProps, null) (ProductInfoAddToCart);