import { MovieDetail } from "./view/MovieDetail";
import { Movies } from "./view/Movies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/movie/:movieId",
    element: <MovieDetail />,
  },
]);
export const ApplicationRoutes = () => <RouterProvider router={router} />;
