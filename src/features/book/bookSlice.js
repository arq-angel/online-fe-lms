import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [], // for admin purpose
  publicBooks: [], // for public purpose
  selectedBook: {},
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setPublicBooks: (state, action) => {
      state.publicBooks = action.payload;
    },
    setSelectedBook: (state, { payload }) => {
      state.selectedBook = payload || {};
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setBooks, setPublicBooks, setSelectedBook } = actions;

export default reducer;
