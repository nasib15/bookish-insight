// import SortBy from "../components/SortBy/SortBy";
import ListedTabs from "../components/ListedTabs/ListedTabs";
import { getLocalStorage } from "../utils/localStorage";
// import { createContext } from "react";

// export const ReadingContext = createContext("rating");
// export const PagesContext = createContext("pages");
// export const YearContext = createContext("year");

const sorting = (sortedBy) => {
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

const ListedBooks = () => {
  return (
    <div>
      <h2 className="bg-red-300 rounded-xl py-8 text-center font-bold text-2xl mt-6 mb-8">
        Books
      </h2>
      {/* <ReadingContext.Provider value="rating">
        <PagesContext.Provider value="pages">
          <YearContext.Provider value="year">
            
          </YearContext.Provider>
        </PagesContext.Provider>
      </ReadingContext.Provider> */}
      {/* <SortBy sorting={sorting} /> */}
      <ListedTabs />
    </div>
  );
};

export default ListedBooks;
