import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../NotFound";
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../home/Home";

const Router = () => {
  // const base = "react-todo-app";
  const config = createBrowserRouter([
    {
      path: `/`,
      element: <Home />,
    },
    {
      path: `/register`,
      element: <Register />,
    },
    {
      path: `/login`,
      element: <Login />,
    },
    {
      path: `/*`,
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={config} />;
};

export default Router;
