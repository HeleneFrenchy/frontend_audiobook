import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/books/" }),
  endpoints: (builder) => ({
    getBooksUser: builder.mutation({
      query: ({ userID }) => ({
        url: `books/${userID}`,
        method: "GET",
        body: {},
      }),
    }),

    // postBook: builder.mutation({
    //   query: ({ userID, bookId }) => ({
    //     url: `books/${userID}/${bookId}`,
    //     method: "POST",
    //     body: {},
    //   }),
    // }),=> SAME AS PURCHASE?????

    deleteBook: builder.mutation({
      query: ({ userID, bookId }) => ({
        url: `books/${userID}/${bookId}`,
        method: "DELETE",
        body: {},
      }),
    }),

    reviewBook: builder.mutation({
      query: ({ bookId }) => ({
        url: `books/review/${bookId}`,
        method: "POST",
        body: {},
      }),
    }),

    getBooksBookstore: builder.mutation({
      query: ({}) => ({
        url: "books",
        method: "GET",
        body: {},
      }),
    }),

    getBooksBookstoreFilter: builder.mutation({
      query: ({}) => ({
        url: "books?title=...&genre=...&language=...&price=...&age=...",
        method: "GET",
        body: {},
      }),
    }),

    addBooksToCart: builder.mutation({
      query: ({ bookId }) => ({
        url: `books/${bookId}/add-to-cart`,
        method: "POST",
        body: {},
      }),
    }),

    buyBook: builder.mutation({
      query: ({}) => ({
        url: `books/purchase`,
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
  useReviewBookMutation,
  useGetBooksBookstoreMutation,
  useGetBooksBookstoreFilterMutation,
  useAddBooksToCartMutation,
  useBuyBookMutation,
} = bookApi;