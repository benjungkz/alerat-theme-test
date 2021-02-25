import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import store from "./store/CartStore"
import Cart from "./components/Cart"
import ProductInfo from './components/ProductInfo';



const rootEl = document.getElementById("newcart")

rootEl && ReactDOM.render(
    <Provider store={store}>
            <ProductInfo/>
            <Cart/>
    </Provider>, 
    rootEl)
