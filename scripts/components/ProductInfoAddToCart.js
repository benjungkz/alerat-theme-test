import React, { useState, useEffect } from 'react'
import AddCartAPI from '../api/AddCartAPI'
import { connect } from 'react-redux';
import { openCart } from '../store/CartStore';

const ProductInfoAddToCart = ({addCartItems, cartOpen}) => {
   
    const [checkout, setCheckout] = useState(false)
    
    useEffect(()=>{
        setCheckout(false)
    },[checkout])

    const checkoutHandler = ()=>{
        // Add to cart
        setCheckout(true)
        
        // Open cart
        cartOpen('--active')
        
        // Scoll top
        window.scrollTo(0,0)
    }

    return(
        <>
            <button 
                className="productInfo__add btn btn--checkout" 
                onClick={checkoutHandler}
                >Add Cart </button>
            {
                checkout? <AddCartAPI itemStage={addCartItems}/> : null
            }
        </>      
    )
}


const mapStateToProps = state => ({ 
    addCartItems: state.addCartItem,
    isOpen: state.openCart
})
const mapDispatchToProps =  dispatch => ({cartOpen: (isOpen)=>dispatch(openCart(isOpen))})




export default connect(mapStateToProps, mapDispatchToProps) (ProductInfoAddToCart);