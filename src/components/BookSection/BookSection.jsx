import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const BookSection = () => {
  const books = useLoaderData();

  return (
    <div className="pb-10">
      <h1 className="text-center text-4xl font-bold mb-9">Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {books.map((book, idx) => (
          <BookCard
            bookName={book.bookName}
            author={book.author}
            category={book.category}
            rating={book.rating}
            bookTags={book.tags}
            image={book.image}
            key={idx}
            id={book.bookId}
          ></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BookSection;
