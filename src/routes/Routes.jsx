import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/profile",
            element: <Profile />,
        }
    ]
  },
]);

export default Router;