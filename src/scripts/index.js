import headerChange from "./header.js";
// import getYourBookList from "./search.js";

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

function getYourBookList() {
  result.innerHTML = "";
  fetch("http://openlibrary.org/search.json?q=" + userInput.value)
    .then((data) => data.json())
    .then((response) => {
      // show 5 books
      for (let i = 0; i <= 5; i++) {
        // alert(response[i]);
        (result.innerHTML +=
          "<h2>" + response.docs[i].title + "</h2>" + "<h3>"),
          response.docs[i].author_name[0] +
            "</h3>" +
            "<br>" +
            "<br><img src='http://covers.openlibrary.org/b/isbn/",
          response.docs[i].isbn[0] + "-L.jpg'><br>";
      }
    })
    .catch((err) => {
      // Handle any errors that occurred during the fetch or parsing
      console.error("There was a problem with the fetch operation:", err);
    });
}

searchBtn.addEventListener("click", () => {
  document.getElementById("id-result").style.display = "flex";
  userInput.value = "";
  getYourBookList();
});
