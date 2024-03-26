const Banner = () => {
  return (
    <div className="mt-6 mb-24 hero min-h-[80vh] bg-slate-100 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl max-w-2xl leading-[70px] font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn text-white bg-[#23BE0A] mt-12">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
