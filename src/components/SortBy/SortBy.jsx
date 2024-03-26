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
            <a>Rating</a>
          </li>
          <li>
            <a>Number of Pages</a>
          </li>
          <li>
            <a>Published Year</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortBy;
