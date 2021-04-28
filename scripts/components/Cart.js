import React, { useEffect, useState } from 'react'
import GetCartAPI from '../api/GetCartAPI';
import CartCardList from './CartCardList';
import CartAddButton from './CartAddButton'
import { openCart, closeCart } from '../store/CartStore';
import { connect } from "react-redux"


const CART_BTN_DELETE_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/cart-btn-delete.png'

const Cart = ({isOpen, cartOpen, cartClose}) => {   

    useEffect(()=>{
        console.log("[Alerta Family] Ajax Cart is rendered.")
        clickCartMenuHandler();
    },[])

    // Event Handler
    const clickCartMenuHandler = () =>{
        let cartButton = document.getElementsByClassName('header__menu--cart')
        let cartIcon = document.getElementsByClassName('icon__cart')
        cartButton[0].addEventListener('click', slideHandler)
        cartIcon[1].addEventListener('click', slideHandler)
        
        // TEST
        // let cartButton = document.getElementsByClassName('cart-btn-test')
        // console.log(cartButton)
        // cartButton[0].addEventListener('click', slideHandler)
    }

    // Slide Animation Handler
    const slideHandler = () =>{
        isOpen == '' ? cartOpen('--active') : cartClose('')
    }

    return(
        <>
            <form className={isOpen != '' ? 'cart cart' + isOpen : 'cart'} action="/cart" method="post">
                <div className="cart__header">
                    <h1 className="cart__title cart__title--main">My Cart</h1>
                    <img 
                        className="cart__image cart__image--btn" 
                        src={CART_BTN_DELETE_URL} 
                        alt="Please click the button if you want to delete the item from the cart"
                        onClick={slideHandler}/> 
                </div>
                <div className="cart__body">
                    <GetCartAPI/>
                    <CartCardList />
                </div>
                <div className="cart__footer">
                    <CartAddButton />
                </div>
            </form>

            <div className={isOpen !='' ? 'cart__overlay cart__overlay' + isOpen : 'cart__overlay'}
                onClick={slideHandler}></div>
        </>
    )
}

const mapStateToProps = state =>( { isOpen : state.openCart } )
const mapDispatchToProps =  dispatch => ({
    cartOpen: (isOpen)=>dispatch(openCart(isOpen)),
    cartClose: (isOpen)=>dispatch(closeCart(isOpen))   
})
    

export default connect(mapStateToProps, mapDispatchToProps ) (Cart);