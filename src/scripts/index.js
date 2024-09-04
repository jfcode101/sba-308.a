import headerChange from "./header.js";
import getYourBookList from "./search.js";

// ********************** headerChange **********************
// add a content load to the page
window.addEventListener("DOMContentLoaded", () => {
  headerChange();
});

// when the window resizes
window.addEventListener("resize", () => {
  headerChange();
});

const userInput = document.querySelector("#id-search");
const searchBtn = document.querySelector("#id-search-btn");
const result = document.querySelector("#id-result");
