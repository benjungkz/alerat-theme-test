import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import ProductInfo from './components/ProductInfo'
import store from "./store/ProductStore"


const rootEl = document.getElementById("productinfo")

rootEl && ReactDOM.render(
    <Provider store={store}>
            <ProductInfo />
    </Provider>, 
    rootEl)
