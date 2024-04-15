import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const initialState = {
  user: null,
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
      }
    );
    // builder.addMatcher(api.endpoints.logout.matchFulfilled, (state, action) => { state.user = null;
    // });
  },
});
