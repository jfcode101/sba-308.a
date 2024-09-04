export function displayBooks(books) {
  const gallery = document.querySelector("#id-gallery");

  gallery.innerHTML = "";
  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>${
              book.author_name ? book.author_name.join(", ") : "Unknown Author"
            }</p>
            <button onclick="addToReadingList('${
              book.key
            }')">Add to Reading List</button>
        `;
    gallery.appendChild(bookDiv);
  });
}
