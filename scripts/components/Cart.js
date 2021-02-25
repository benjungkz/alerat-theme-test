import React, { useEffect } from 'react'
import GetCartAPI from '../api/GetCartAPI';
import CartCardList from '../components/CartCardList';
import CartAddButton from '../components/CartAddButton'

const Cart = () => {
    useEffect(()=>{
        console.log("CART!!")
    },[])
    return(
        <form action="/cart" method="post">
            <div className="cart__header">
                <h1>Cart Header</h1>
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