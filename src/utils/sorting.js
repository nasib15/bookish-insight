import { getLocalStorage } from "./localStorage";

export const sorting = (sortedBy) => {
  const readBooks = getLocalStorage();
  const sortedBooks = readBooks.sort((a, b) => {
    if (sortedBy === "rating") {
      return b.rating - a.rating;
    }
    if (sortedBy === "pages") {
      return b.totalPages - a.totalPages;
    }
    if (sortedBy === "year") {
      return b.yearOfPublishing - a.yearOfPublishing;
    }
  });
  console.log(sortedBooks);
};
