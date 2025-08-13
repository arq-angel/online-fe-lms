import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import bookReducer from "../features/book/bookSlice.js";
import cartReducer from "../features/cart/cartSlice.js";
import borrowReducer from "../features/borrow/borrowSlice.js";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

const cartPersisitConfig = {
  key: "cart",
  storage,
};

const rootReducer = combineReducers({
  userInfo: userReducer,
  bookInfo: bookReducer,
  borrowInfo: borrowReducer,
  cartInfo: persistReducer(cartPersisitConfig, cartReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
