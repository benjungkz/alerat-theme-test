import React, { useEffect, useState } from 'react'
import GetCartAPI from '../api/GetCartAPI';
import CartCardList from '../components/CartCardList';
import CartAddButton from '../components/CartAddButton'

const CART_BTN_DELETE_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/cart-btn-delete.png'

const Cart = () => {
    const [ active, setActive ] = useState('')

    useEffect(()=>{
        console.log("[Alerta Family] Ajax Cart is rendered.")
        let cartButton = document.getElementsByClassName('header__menu--cart')
        console.log(cartButton)
        cartButton[0].addEventListener('click', slideHandler)
    },[])

    // Slide Animation Handler
    const slideHandler = () =>{
        active == '' ? setActive('cart--active') : setActive('')
    }

    return(
        <form className={'cart ' + active} action="/cart" method="post">
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

    )
}

export default Cart;