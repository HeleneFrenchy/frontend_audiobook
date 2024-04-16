import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/users",
    prepareHeaders: (headers, { getState }) => {
      // Retrieve the token from the Redux state
      const token = getState().auth.user?.token;
      if (token) {
        // Set the Authorization header with the token
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBooksUser: builder.query({
      query: ({ userID }) => ({
        url: `users/books/`,
        method: "GET",
      }),
    }),

    postBook: builder.mutation({
      query: ({ userID, bookId }) => ({
        url: `users/books/${userID}/${bookId}`,
        method: "POST",
        body: {},
      }),
    }),
    // => SAME AS PURCHASE?????

    deleteBook: builder.mutation({
      query: ({ userID, bookId }) => ({
        url: `users/books/${userID}/${bookId}`,
        method: "DELETE",
        body: {},
      }),
    }),

    getCart: builder.query({
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
    }),

    deleteBooksFromCart: builder.mutation({
      query: (bookId) => ({
        url: `/${bookId}/cart`,
        method: "DELETE",
      }),
    }),

    buyBook: builder.mutation({
      query: ({}) => ({
        url: `/purchase`,
        method: "POST",
        body: {},
      }),
    }),
  }),
});
export const {
  useGetBooksUserMutation,
  useDeleteBookMutation,
  usePostBookMutation,
  useAddBooksToCartMutation,
  useBuyBookMutation,
  useGetCartQuery,
  useDeleteBooksFromCartMutation,
} = userApi;
