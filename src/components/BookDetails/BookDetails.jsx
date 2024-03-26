import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const id = useParams();
  const intId = parseInt(id.id);
  const bookObj = books.find((book) => book.bookId === intId);
  const {
    author,
    bookName,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    image,
  } = bookObj;

  return (
    <div className=" mt-10 mb-10 card lg:card-side bg-base-100 shadow-xl">
      <figure className="max-w-xl">
        <img className="h-full" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="divider"></div>
        <div>{category}</div>
        <div className="divider"></div>
        <div>Review: {review}</div>
        <div>
          Tag:{" "}
          {tags.map((tag, idx) => (
            <p
              className="mr-3 inline-block mb-2 text-[#23BE0A] py-2 px-4 bg-slate-200 rounded-xl"
              key={idx}
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="divider"></div>
        <div>Number of Pages: {totalPages}</div>
        <div>Publisher: {publisher}</div>
        <div>Year of Publishing: {yearOfPublishing}</div>
        <div>Rating: {rating}</div>
        <div className="card-actions mt-4">
          <button className="btn text-white bg-[#23BE0A]">Read</button>
          <button className="btn text-white bg-[#50B1C9]">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
