import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { Router, Route, BrowserRouter } from 'react-router-dom'
import Cart from "./components/Cart"
import CartTest from "./components/CartTest"
import ProductInfo from './components/ProductInfo'
import store  from "./store/CartStore"




const rootEl = document.getElementById("newcart")

rootEl && ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/">
                <Cart/>
                <ProductInfo />
            </Route>
        </BrowserRouter>
    </Provider>, 
    rootEl)
