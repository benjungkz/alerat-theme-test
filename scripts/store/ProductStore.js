import { configureStore, createSlice } from '@reduxjs/toolkit';

const AddCartItems = createSlice({
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


const store = configureStore({ reducer:AddCartItems.reducer })

export const { addItem, updateItem, removeItem } = AddCartItems.actions;

export default store

