import { sorting } from "../../utils/sorting";

const SortBy = () => {
  return (
    <div className="w-full">
      <div className="dropdown flex justify-center">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-[#23BE0A] text-white"
        >
          Sort By
        </div>
        <ul
          tabIndex={0}
          className="mt-14 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={() => sorting("rating")}>Rating</a>
          </li>
          <li>
            <a onClick={() => sorting("pages")}>Number of Pages</a>
          </li>
          <li>
            <a onClick={() => sorting("year")}>Published Year</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortBy;
