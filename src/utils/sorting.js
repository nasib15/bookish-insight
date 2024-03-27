import { getLocalStorage } from "./localStorage";

const readBooks = getLocalStorage();

export const sorting = (sortedBy) => {
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
