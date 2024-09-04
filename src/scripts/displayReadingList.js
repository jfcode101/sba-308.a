export function displayReadingList() {
  const readingList = document.getElementById("id-reading-list");
  const readingListItems =
    JSON.parse(localStorage.getItem("readingList")) || [];
  readingList.innerHTML = "";
  readingListItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerText = item; // You can enhance this to show more details
    readingList.appendChild(listItem);
  });
}
