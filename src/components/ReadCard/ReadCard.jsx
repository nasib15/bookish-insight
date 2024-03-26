const ReadCard = () => {
  return (
    <div className="card card-side border-2 p-6 border-[]">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">bookName</h2>
        <p>By: author</p>
        <div>
          <p>Tag: </p>
          <p>Year of Publishing: </p>
        </div>
        <div>
          <div>
            <p>Publisher:</p>
          </div>
          <div>
            <p>Pages:</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex gap-2 items-center">
          <span className="px-4 py-2 bg-opacity-30 bg-[#328EFF] text-[#328EFF] rounded-3xl">
            Category:{" "}
          </span>
          <span className="px-4 py-2 bg-opacity-30 bg-[#FFAC33] text-[#FFAC33] rounded-3xl">
            Rating:{" "}
          </span>
          <span className="px-4 py-2 bg-[#23BE0A] text-white rounded-3xl">
            View Details:{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReadCard;
