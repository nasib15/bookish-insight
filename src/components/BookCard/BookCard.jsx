/* eslint-disable react/prop-types */

const BookCard = ({ bookTags }) => {
  console.log(bookTags);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <div>
          {bookTags.map((tag, idx) => (
            <span className="mr-3" key={idx}>
              {tag}
            </span>
          ))}
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
