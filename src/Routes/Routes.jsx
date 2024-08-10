import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import PageRead from "../pages/PageRead";
import ErrorPage from "../components/Errorpage/Errorpage";
import About from "../pages/About";
import PricingPage from "../pages/PricingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public.json"),
      },
      {
        path: "/books/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/public.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
      },

      {
        path: "/pages-to-read",
        element: <PageRead></PageRead>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/pricing",
        element: <PricingPage></PricingPage>,
      },
    ],
  },
]);

export default router;
