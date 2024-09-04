export function addToReadingList(bookKey) {
  const readingListItems =
    JSON.parse(localStorage.getItem("readingList")) || [];
  if (!readingListItems.includes(bookKey)) {
    readingListItems.push(bookKey);
    localStorage.setItem("readingList", JSON.stringify(readingListItems));
    displayReadingList();
  }
}
