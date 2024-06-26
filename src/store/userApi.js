import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://audiobookbackend-production.up.railway.app/users",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.user?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      } else {
        throw new Error("User not signed in");
      }

      return headers;
    },
  }),
  tagTypes: ["Books", "Cart"],

  endpoints: (builder) => ({
    getBooksUser: builder.query({
      providesTags: ["Books"],
      query: () => ({
        url: `/books/`,
        method: "GET",
      }),
    }),

    deleteBook: builder.mutation({
      query: ({ bookId }) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
        body: {},
      }),
    }),

    getCart: builder.query({
      providesTags: ["Cart"],
      query: () => ({
        url: `/cart`,
        method: "GET",
      }),
    }),

    addBooksToCart: builder.mutation({
      query: (bookId) => ({
        url: `/${bookId}/cart`,
        method: "POST",
      }),
      invalidatesTags: ["Cart"],
    }),

    deleteBooksFromCart: builder.mutation({
      query: (bookId) => ({
        url: `/${bookId}/cart`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    buyBook: builder.mutation({
      query: () => ({
        url: `/purchase`,
        method: "POST",
      }),
      invalidatesTags: ["Cart", "Books"],
    }),
  }),
});
export const {
  useGetBooksUserQuery,
  useDeleteBookMutation,
  usePostBookMutation,
  useAddBooksToCartMutation,
  useBuyBookMutation,
  useGetCartQuery,
  useDeleteBooksFromCartMutation,
} = userApi;
