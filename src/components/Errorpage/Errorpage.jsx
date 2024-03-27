import { useRouteError } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Navbar></Navbar>
      <div
        id="error-page"
        className="flex flex-col justify-center items-center gap-10 h-[85vh]"
      >
        <h1 className="font-bold text-4xl">Oops!</h1>
        <p className="font-semibold text-2xl">
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i className="text-xl">{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
