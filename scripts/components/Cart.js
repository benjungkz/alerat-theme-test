import React, { useEffect } from 'react'
import GetCartAPI from '../api/GetCartAPI';

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
            </div>
            <div className="cart__footer">
                <input className="cart__checkout" type="submit" name="checkout" value="Checkout"/>
            </div>

        </form>

    )
}

export default Cart;