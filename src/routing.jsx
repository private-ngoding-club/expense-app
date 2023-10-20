import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
