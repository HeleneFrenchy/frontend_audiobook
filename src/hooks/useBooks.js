import { useGetBooksQuery } from "store/bookApi";

export function useBooks(bookIds) {
  const { data: books = [] } = useGetBooksQuery();

  return bookIds
    .map((bookId) => books.find((book) => book._id === bookId))
    .filter(Boolean);
}
