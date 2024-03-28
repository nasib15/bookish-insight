/* eslint-disable react/prop-types */
import { MdOutlineStarBorder } from "react-icons/md";
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
    <NavLink to={`/books/${id}`} className="card bg-base-100 border">
      <figure className="px-10 pt-10">
        <img src={image} className="rounded-xl h-[300px] w-full" />
      </figure>
      <div className="card-body">
        <div>
          {bookTags.map((tag, idx) => (
            <p
              className="mr-3 inline-block mb-2 text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] rounded-xl"
              key={idx}
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="text-2xl font-bold">{bookName}</p>
        <p className="border-b-2 border-dotted pb-6 opacity-80 font-medium">
          By: {author}
        </p>
        <div className="flex">
          <p className="opacity-80 font-medium">{category}</p>
          <div className="opacity-80 font-medium flex items-center gap-2">
            <p>{rating}</p>
            <div>
              <MdOutlineStarBorder></MdOutlineStarBorder>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default BookCard;
