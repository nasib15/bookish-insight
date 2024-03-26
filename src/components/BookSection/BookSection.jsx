import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const BookSection = () => {
  const books = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-9">Books</h1>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard bookTags={book.tags} key={book.id}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BookSection;
