import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const libraryApi = createApi({
  reducerPath: "libraryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/library/" }),
  endpoints: (builder) => ({
    getlibrary: builder.mutation({
      query: ({}) => ({
        url: "library",
        method: "GET",
        body: {},
      }),
    }),

    postBook: builder.mutation({
      query: ({}) => ({
        url: "library/:libraryId/:bookId",
        method: "POST",
        body: {},
      }),
    }),

    deleteBook: builder.mutation({
      query: ({}) => ({
        url: "library/:libraryId/:bookId",
        method: "DELETE",
        body: {
          
        },
      }),
    })
})
})
export const {
  useGetlibraryMutation,
  useDeleteBookMutation,
  usePostBookMutation
} = libraryApi;