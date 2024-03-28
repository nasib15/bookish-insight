import { useLoaderData, useParams } from "react-router-dom";
import { setLocalStorage, setWishlist } from "../../utils/localStorage";

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

  const handleRead = () => {
    setLocalStorage(bookObj);
  };
  const handleWishlist = () => {
    setWishlist(bookObj);
  };

  return (
    <div className=" mt-10 mb-10 card lg:flex lg:flex-row bg-base-100">
      <figure className="lg:min-w-[35vw] lg:max-w-[35vw]">
        <img
          className="h-[90%] rounded-2xl object-cover"
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{bookName}</h2>
        <p className="opacity-80 font-medium">By: {author}</p>
        <div className="divider"></div>
        <div className="opacity-80 font-medium">{category}</div>
        <div className="divider"></div>
        <div>
          <span className="font-bold">Review:</span>{" "}
          <span className="opacity-70">{review}</span>
        </div>
        <div>
          <span className="font-bold mr-4">Tag: </span>
          {tags.map((tag, idx) => (
            <p
              className="mr-3 inline-block mb-3 text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] rounded-xl"
              key={idx}
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex flex-col gap-3 lg:w-[50%]">
          <div className="flex justify-between">
            <span className="opacity-80">Number of Pages: </span>
            <span className="font-semibold text-[#131313]">{totalPages}</span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-80">Publisher: </span>
            <span className="font-semibold text-[#131313]">{publisher}</span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-80">Year of Publishing: </span>
            <span className="font-semibold text-[#131313]">
              {yearOfPublishing}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-80">Rating:</span>{" "}
            <span className="font-semibold text-[#131313]">{rating}</span>
          </div>
        </div>
        <div className="card-actions mt-4">
          <button
            onClick={() => {
              handleRead();
            }}
            className="btn text-white bg-[#23BE0A]"
          >
            Read
          </button>
          <button
            onClick={() => {
              handleWishlist();
            }}
            className="btn text-white bg-[#50B1C9]"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
