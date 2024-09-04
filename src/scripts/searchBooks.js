import { fetchBooks } from "./fetchBooks.js";
import { displayBooks } from "./displayBooks.js";
import { updatePagination } from "./updatePagination.js";

export async function searchBooks(
  query,
  currentPage,
  booksPerPage,
  displayBooks,
  updatePagination
) {
  const data = await fetchBooks(query, currentPage);
  displayBooks(data.docs);
  updatePagination(Math.ceil(data.numFound / booksPerPage));
}
