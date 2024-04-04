import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/auth/" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ username, email, password }) => ({
        url: "signup",
        method: "POST",
        body: {
          username,
          email,
          password,
        },
      }),
    }),

    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),

    profile: builder.mutation({
      query: ({ username, email, password }) => ({
        url: "profile",
        method: "GET",
        body: {
          username,
          email,
          password,
        },
      }),
    }),

    updateProfile: builder.mutation({
      query: ({ username, email, password }) => ({
        url: "profile",
        method: "PUT",
        body: {
          username,
          email,
          password,
        },
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useUpdateProfileMutation } =
  authApi;
