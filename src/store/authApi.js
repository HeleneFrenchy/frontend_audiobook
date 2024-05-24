import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://audiobookbackend-production.up.railway.app/auth/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.user?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Profile"],
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

    profile: builder.query({
      providesTags: ["Profile"],
      query: () => ({
        url: "profile",
        method: "GET",
      }),
    }),

    updateProfile: builder.mutation({
      invalidatesTags: ["Profile"],
      query: ({ username, email, password }) => ({
        url: "profile",
        method: "PATCH",
        body: {
          username,
          email,
          password,
        },
      }),
    }),

    password: builder.mutation({
      query: ({ email }) => ({
        url: "password",
        method: "POST",
        body: {
          email,
        },
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useUpdateProfileMutation,
  usePasswordMutation,
  useProfileQuery,
} = authApi;
