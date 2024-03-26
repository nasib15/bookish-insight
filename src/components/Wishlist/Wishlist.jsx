/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Wishlist = ({
  id,
  author,
  bookName,
  totalPages,
  rating,
  category,
  bookTags,
  publisher,
  yearOfPublishing,
  image,
}) => {
  return (
    <div>
      <div className="card card-side border-2 p-6 border-[]">
        <figure>
          <img src={image} className="w-52 rounded-xl h-full" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div>
            <p>
              Tag:{" "}
              {bookTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-opacity-30 bg-[#23BE0A] text-[#23BE0A] rounded-3xl"
                >
                  {tag}
                </span>
              ))}
            </p>
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
          <div>
            <div>
              <p>Publisher: {publisher}</p>
            </div>
            <div>
              <p>Pages: {totalPages}</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex gap-2 items-center">
            <span className="px-4 py-2 bg-opacity-30 bg-[#328EFF] text-[#328EFF] rounded-3xl">
              Category:{category}
            </span>
            <span className="px-4 py-2 bg-opacity-30 bg-[#FFAC33] text-[#FFAC33] rounded-3xl">
              Rating:{rating}
            </span>
            <NavLink
              to={`/books/${id}`}
              className="px-4 py-2 bg-[#23BE0A] text-white rounded-3xl"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
