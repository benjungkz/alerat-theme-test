import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';

const cartItems = createSlice({
    name: 'cartItemsReducer',
    initialState: [],
    reducers:{
        get: ( state, action )=>  state.concat(action.payload),
        remove: (state, action ) => state.filter( item => item.id != action.payload)
    }
})

const addCartItems = createSlice({
    name: 'addCartItemReducer',
    initialState: [],
    reducers:{
        addItem: ( state, action ) => state.concat(action.payload), //concet
        updateItem: ( state, action ) => state.map((item)=>{
            if(item.id === action.payload.id) return action.payload;
            else return item
        }),
        removeItem: ( state, action ) => state.filter(item => item.id != action.payload)
    }
})

// Combine
const rootReducer = combineReducers({
    cartItem: cartItems.reducer,
    addCartItem: addCartItems.reducer
})

const store = configureStore({reducer:rootReducer})

export const { get, remove } = cartItems.actions;
export const { addItem, updateItem, removeItem } = addCartItems.actions;

export default store

