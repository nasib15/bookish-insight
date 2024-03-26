import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-6 mb-24 hero min-h-[80vh] bg-slate-100 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/KrrMr2p/16278892-5740289.jpg"
          className="rounded-lg shadow-2xl max-w-sm"
        />
        <div>
          <h1 className="text-5xl max-w-2xl leading-[70px] font-bold">
            Books to freshen up your bookshelf
          </h1>

          <NavLink
            to={`/listed-books`}
            className="btn text-white bg-[#23BE0A] mt-12"
          >
            View The List
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
