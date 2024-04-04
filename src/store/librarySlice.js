import { createSlice } from "@reduxjs/toolkit";
import { libraryApi } from "./libraryApi";

const initialState = {
  user: null,
};

export const librarySlice = createSlice({
  name: "library",
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
    // builder.addMatcher(api.endpoints.logout.matchFulfilled, (state) => {
    //   // Clear user state on logout
    //   state.user = null;
    // });
  },
});
