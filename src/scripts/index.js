import headerChange from "./header.js";
import { searchBooks } from "./search.js";
import { displayBooks } from "./displayBooks.js";

// ********************** headerChange **********************
// add a content load to the page
window.addEventListener("DOMContentLoaded", () => {
  headerChange();
});

// when the window resizes
window.addEventListener("resize", () => {
  headerChange();
});

// ********************** headerChange **********************


// search field
const userInput = document.querySelector("#id-search");
// search button
const searchBtn = document.querySelector("#id-search-btn");
// result container
const resultContainer = document.querySelector("#id-result");

// gallery
const gallery = document.querySelector("#id-gallery");
// pagination
const pagination = document.querySelector("#id-pagination");
// reading list
const readingList = document.getElementById("id-reading-list");
