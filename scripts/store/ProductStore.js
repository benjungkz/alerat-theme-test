import { configureStore, createSlice } from '@reduxjs/toolkit';

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


const store = configureStore({ reducer:addCartItems.reducer })

export const { addItem, updateItem, removeItem } = addCartItems.actions;

export default store

