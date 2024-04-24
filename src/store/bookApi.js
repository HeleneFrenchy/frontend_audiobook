import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/books" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (filters) => {
        const searchParams = new URLSearchParams();

        if (filters?.title) {
          searchParams.set("title", filters.title);
        }

        if (filters?.author) {
          searchParams.set("author", filters.author);
        }

        if (filters?.age) {
          searchParams.set("age", filters.age);
        }

        if (filters?.language) {
          searchParams.set("language", filters.language);
        }

        if (filters?.price) {
          searchParams.set("price", filters.price);
        }

        if (filters?.description) {
          searchParams.set("description", filters.description);
        }

        if (filters?.audio) {
          searchParams.set("audio", filters.audio);
        }

        let query = "";
        if (searchParams.toString()) {
          query = `?${searchParams.toString()}`;
        }

        return {
          url: `/${query}`,
          method: "GET",
        };
      },
    }),

    getBooksBookstoreFilter: builder.mutation({
      query: ({}) => ({
        url: "/",
        method: "GET",
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
  }),
});
export const {
  useGetBooksQuery,
  useReviewBookMutation,
  useGetBooksBookstoreMutation,
} = bookApi;
