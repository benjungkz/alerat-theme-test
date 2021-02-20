import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';

const cartItems = createSlice({
    name: 'cartItemsReducer',
    initialState: [],
    reducers:{
        get: ( state, action )=>  action.payload,
        remove: (state, action ) => state.filter( item => item.id != action.payload)
    }
})


const store = configureStore({reducer:cartItems.reducer})

export const { get, remove } = cartItems.actions;


export default store

