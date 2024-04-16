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
  reducers: {},
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
    // builder.addMatcher(api.endpoints.logout.matchFulfilled, (state, action) => { state.user = null;
    // });
  },
});
