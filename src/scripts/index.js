import headerChange from "./header.js";

// ********************** headerChange **********************
// add a content load to the page
window.addEventListener("DOMContentLoaded", () => {
  headerChange();
});

// when the window resizes
window.addEventListener("resize", () => {
  headerChange();
});
