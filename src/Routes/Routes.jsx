import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import PageRead from "../pages/PageRead";

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
        path: "/books/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("./public.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
      },

      {
        path: "/pages-to-read",
        element: <PageRead></PageRead>,
      },
    ],
  },
]);

export default router;
