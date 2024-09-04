import { headerChange } from "./headerChange.js";
import { fetchBooks } from "./fetchBooks.js";
import { displayBooks } from "./displayBooks.js";
import { updatePagination } from "./updatePagination.js";
import { searchBooks } from "./searchBooks.js";
import { addToReadingList } from "./addToReadingList.js";
import { displayReadingList } from "./displayReadingList.js";

// const searchButton = document.getElementById("search-button");
// const searchInput = document.getElementById("search-input");
// const bookGallery = document.getElementById("book-gallery");
// const pagination = document.getElementById("pagination");
// const readingList = document.getElementById("reading-list");

// search field
const userInput = document.querySelector("#id-search");
// search button
const searchBtn = document.querySelector("#id-search-btn");
// result container
const resultContainer = document.querySelector("#id-result");
// gallery
const gallery = document.querySelector("#id-gallery");
// reading list
const readingList = document.getElementById("id-reading-list");
// pagination
const pagination = document.getElementById("id-pagination");

let currentPage = 1;
const booksPerPage = 2;

// Event Listeners
searchBtn.addEventListener("click", () => {
  currentPage = 1; // Reset to first page on new search
  searchBooks(
    userInput.value,
    currentPage,
    booksPerPage,
    displayBooks,
    updatePagination
  );
});

// Initial load
displayReadingList();

// ********************** headerChange **********************
// add a content load to the page
window.addEventListener("DOMContentLoaded", () => {
  headerChange();
  userInput.value = "";

  // get the template
  const template = document.querySelector("#id-footer-template");
  const footer = document.getElementById("id-footer");

  // clone the template
  const clone = document.importNode(template.content, true);

  // appent the cloned content to the footer
  footer.appendChild(clone);
});

// when the window resizes
window.addEventListener("resize", () => {
  headerChange();
});

// ********************** headerChange **********************
