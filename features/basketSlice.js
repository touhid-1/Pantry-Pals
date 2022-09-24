import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
      addToBasket: (state, action) => {
        state.items = [...state.items, action.payload]
      },
      removeFromBasket: (state, action) => {
        
      } 
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basketItems.items;

export default basketSlice.reducer