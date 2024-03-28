import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex flex-col gap-1"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                    : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/listed-books"}
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                    : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/pages-to-read"}
                className={({ isActive }) =>
                  isActive
                    ? "border  border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                    : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Pages to Read
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/pricing"}
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                    : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                    : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-2xl lg:text-3xl font-bold px-1"
        >
          Bookish Insight
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                  : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/listed-books"}
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                  : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/pages-to-read"}
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                  : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
              }
            >
              Pages to Read
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/pricing"}
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                  : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] text-[#23BE0A] px-3 py-2 rounded-lg"
                  : "hover:bg-[#23BE0A] hover:text-white px-3 py-2 rounded-lg"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2 lg:gap-4 ">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
