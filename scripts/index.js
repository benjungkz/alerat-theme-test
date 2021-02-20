import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import Cart from "./components/Cart"
import ProductInfo from './components/ProductInfo'
import store  from "./store/CartStore"




const rootEl = document.getElementById("newcart")

rootEl && ReactDOM.render(
    <Provider store={store}>
            <Cart/>
    </Provider>, 
    rootEl)