import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  recentBorrow: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    removeBookFromCart: (state, { payload }) => {
      //filter out the book
      state.cart.filter((book) => book._id !== payload);
      state.cart = state.cart.filter((book) => book._id !== payload);
    },
    setRecentBorrow: (state, { payload }) => {
      state.recentBorrow = payload;
    },
    emptyRecentBorrow: (state) => {
      state.recentBorrow = [];
    },
  },
});

const { reducer, actions } = cartSlice;

export const {
  setCart,
  emptyCart,
  removeBookFromCart,
  setRecentBorrow,
  emptyRecentBorrow,
} = actions;

export default reducer;
