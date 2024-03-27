import { toast } from "react-toastify";

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
  if (isExist) {
    return toast.error("Already read this book");
  } else {
    toast.success("Book added to your readlist");
  }
  savedData.push(bookObj);
  localStorage.setItem("books", JSON.stringify(savedData));
};

export const getWishlist = () => {
  let wishlist = [];
  const savedData = localStorage.getItem("wishlist");
  if (savedData) {
    wishlist = JSON.parse(savedData);
  }
  return wishlist;
};

export const setWishlist = (bookObj) => {
  const readBooksData = getLocalStorage();
  const savedData = getWishlist();
  const isExistWishlist = savedData.find(
    (book) => book.bookId === bookObj.bookId
  );
  const isExistReadBooks = readBooksData.find(
    (book) => book.bookId === bookObj.bookId
  );
  if (isExistReadBooks) {
    return toast.error("Already read this book");
  } else if (isExistWishlist) {
    return toast.error("Already added to your wishlist");
  } else {
    toast.success("Added to your wishlist");
  }
  savedData.push(bookObj);
  localStorage.setItem("wishlist", JSON.stringify(savedData));
};
