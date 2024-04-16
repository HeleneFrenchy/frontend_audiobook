import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { authSlice } from "./authSlice";
import { bookApi } from "./bookApi";
import { cartSlice } from "./cartSlice";
import { userApi } from "./userApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authSlice.name]: authSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(bookApi.middleware)
      .concat(userApi.middleware),
});
