/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { IoCalendarClearOutline } from "react-icons/io5";

const ReadCard = ({
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
      <div className="mb-4 card lg:card-side border-2 p-6">
        <figure>
          <img
            src={image}
            className="lg:w-52 rounded-xl w-full h-[350px] lg:h-[90%]"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black text-2xl font-bold opacity-100">
            {bookName}
          </h2>
          <p className="font-medium">By: {author}</p>
          <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
            <p className="mb-2 mt-2">
              <span className="font-bold text-black">Tag: </span>
              {bookTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="mr-3 ml-2 px-4 py-2 bg-opacity-30 bg-[#23BE0A0D] text-[#23BE0A] rounded-3xl"
                >
                  {tag}
                </span>
              ))}
            </p>
            <div className="flex gap-3 items-center">
              <IoCalendarClearOutline className="text-xl"></IoCalendarClearOutline>
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
            <div className="flex gap-2 items-center">
              <IoPeopleOutline className="text-2xl"></IoPeopleOutline>
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex gap-2 items-center">
              <RiPagesLine className="text-2xl"></RiPagesLine>
              <p>Pages: {totalPages}</p>
            </div>
          </div>
          <div className="divider my-2"></div>
          <div className="flex gap-3 items-center">
            <span className="px-4 py-2 bg-opacity-30 bg-[#328EFF26] text-[#328EFF] rounded-3xl">
              Category:{category}
            </span>
            <span className="px-4 py-2 bg-opacity-30 bg-[#FFAC3326] text-[#FFAC33] rounded-3xl">
              Rating:{rating}
            </span>
            <NavLink
              to={`/books/${id}`}
              className="px-4 py-2 bg-[#23BE0A] font-medium text-white rounded-3xl"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadCard;
