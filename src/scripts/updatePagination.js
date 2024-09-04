import { displayBooks } from "./displayBooks";
import { searchBooks } from "./search";

export function updatePagination(totalPages) {
  // pagination
  const pagination = document.querySelector("#id-pagination");
  // clear pagination
  pagination.innerHTML = "";

  // loop over the
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.onclick = () => {
      currentPage = i;
      searchBooks(
        searchInput.value,
        currentPage,
        booksPerPage,
        displayBooks,
        updatePagination
      );
    };
    pagination.appendChild(pageButton);
  }
}
