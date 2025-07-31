import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      // TODO:
      state.cart = [...state.cart, payload];
    },
    removeBookFromCart: (state, { payload }) => {
      //filter out the book
      state.cart.filter((book) => book._id !== payload);
      state.cart = state.cart.filter((book) => book._id !== payload);
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setCart, removeBookFromCart } = actions;

export default reducer;
