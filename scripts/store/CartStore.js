import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';

const cartItems = createSlice({
    name: 'cartItemsReducer',
    initialState: [],
    reducers:{
        // Priolity!
        get: (state, action) => action.payload,
        remove: (state, action ) => state.filter( item => item.id != action.payload),
        // update: (state, action) => action.payload.map((payload)=>{
        //     const index = state.findIndex(payload.id)
        //     return state[index] = payload
        // })
        
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
        removeItem: ( state, action ) => state.filter(item => item.id != action.payload),
    }
})

const rootReducer = combineReducers({
    cartItem: cartItems.reducer,
    addCartItem: addCartItems.reducer
})

const store = configureStore({reducer:rootReducer})

export const { get, remove } = cartItems.actions;
export const { addItem, updateItem, removeItem } = addCartItems.actions;


export default store