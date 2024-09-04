export async function fetchBoooks(query, page) {
  const fetcBoook = fetch(
    `https://openlibrary.org/search.json?q=${query}&page=${page}`
  );

  const responseList = await fetcBoook;
  const bookData = responseList.json();

  //   return data about book searc
  return bookData;
}
