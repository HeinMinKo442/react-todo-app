import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import NotFound from "../NotFound";
import Register from "../components/Register";
import Login from "../components/Login";

const Router = () => {
  const base = "react-todo-app";
  const config = createBrowserRouter([
    {
      path: `${base}/`,
      element: <App />,
    },
    {
      path: `/register`,
      element: <Register />,
    },
    {
      path: `${base}/register`,
      element: <Register />,
    },
    {
      path: `/login`,
      element: <Login />,
    },
    {
      path: `${base}/login`,
      element: <Login />,
    },
    {
      path: `/hello`,
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={config} />;
};

export default Router;
