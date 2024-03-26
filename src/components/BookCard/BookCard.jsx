/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const BookCard = ({
  bookTags,
  author,
  rating,
  category,
  bookName,
  image,
  id,
}) => {
  return (
    <NavLink to={`/books/${id}`} className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} className="rounded-xl h-[300px] w-full" />
      </figure>
      <div className="card-body">
        <div>
          {bookTags.map((tag, idx) => (
            <p
              className="mr-3 inline-block mb-2 text-[#23BE0A] py-2 px-4 bg-slate-200 rounded-xl"
              key={idx}
            >
              {tag}
            </p>
          ))}
        </div>
        <p>{bookName}</p>
        <p className="border-b-2 border-dotted pb-6">By: {author}</p>
        <div className="flex">
          <p>{category}</p>
          <div>
            <p className="flex items-center">
              {rating} <CiStar></CiStar>
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default BookCard;
