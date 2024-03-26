export const getLocalStorage = () => {
  let book = [];
  const savedData = localStorage.getItem("books");
  if (savedData) {
    book = JSON.parse(savedData);
  }
  return book;
};

export const setLocalStorage = (bookObj) => {
  const savedData = getLocalStorage();
  const isExist = savedData.find((book) => book.bookId === bookObj.bookId);
  if (isExist) return alert("Book already added to your list");
  savedData.push(bookObj);
  localStorage.setItem("books", JSON.stringify(savedData));
};
