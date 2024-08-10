import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-6 mb-10 lg:mb-24 hero min-h-[80vh]  rounded-3xl bg-[#1313130D]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/KrrMr2p/16278892-5740289.jpg"
          className="rounded-lg shadow-2xl max-w-sm"
        />
        <div>
          <h1 className="my-4 lg:my-0 text-center lg:text-left text-3xl lg:text-5xl max-w-2xl lg:leading-[65px] font-bold">
            Books to freshen up your bookshelf
          </h1>

          <NavLink
            to={`/listed-books`}
            className="btn text-lg text-white bg-[#23BE0A] mt-4 lg:mt-12 px-6 w-full lg:w-auto"
          >
            View The List
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
