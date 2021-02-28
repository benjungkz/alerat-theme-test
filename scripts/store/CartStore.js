import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';

const cartItems = createSlice({
    name: 'cartItemsReducer',
    initialState: [],
    reducers:{
        get: (state, action) => action.payload,
        remove: (state, action ) => state.filter( item => item.id != action.payload),
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
        changeItem: ( state, action ) => state.map((item, index)=>{
            if(index == 0) return {
                ...item,
                id: action.payload
            }
            else return item 
        }),
        removeItem: ( state, action ) => state.filter(item => item.id != action.payload),
    }
})

const openCarts = createSlice({
    name: 'openCartReducer',
    initialState: '',
    reducers:{
        openCart: (state, action) => action.payload,
        closeCart : (state, action) => action.payload
    }
})

const variantItems = createSlice({
    name: 'variantItemReducer',
    initialState: 0,
    reducers:{
        selectVriantItem: ( state, action ) => action.payload
    }
})

const rootReducer = combineReducers({
    cartItem: cartItems.reducer,
    addCartItem: addCartItems.reducer,
    openCart: openCarts.reducer,
    variantItem :variantItems.reducer
})

const store = configureStore({reducer:rootReducer})

export const { get, remove } = cartItems.actions;
export const { addItem, updateItem, removeItem, changeItem } = addCartItems.actions;
export const { openCart, closeCart  } = openCarts.actions;
export const { selectVriantItem } = variantItems.actions;


export default store