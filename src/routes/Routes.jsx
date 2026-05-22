import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ErrorPage from '../Pages/ErrorPage';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
            path: "/myprofile",
            element: <Profile />,
        },
        {
            path: "/registration",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default Router;