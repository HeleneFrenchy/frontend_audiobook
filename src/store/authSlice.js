import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const initialState = {
  user: localStorage.getItem("userToken")
    ? { token: localStorage.getItem("userToken") }
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;

      localStorage.removeItem("userToken");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.user = {
          token: action.payload.token,
        };

        localStorage.setItem("userToken", action.payload.token);
      }
    );
    builder.addMatcher(
      authApi.endpoints.signUp.matchFulfilled,
      (state, action) => {
        state.user = {
          token: action.payload.token,
        };

        localStorage.setItem("userToken", action.payload.token);
      }
    );
  },
});
export const { logOut } = authSlice.actions;
