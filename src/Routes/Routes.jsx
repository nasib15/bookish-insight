import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./public.json"),
      },
      {
        path: "/listed-books",
        element: <div>Listed</div>,
      },
      {
        path: "/pages-to-read",
        element: <div>Pages</div>,
      },
    ],
  },
]);

export default router;
