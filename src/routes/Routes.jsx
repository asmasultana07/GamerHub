import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Games from "../pages/Games";
import About from "../pages/About";
import Profile from "../pages/Auth/Profile";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Forgot from "../pages/Auth/Forgot";
import ErrorPage from '../Pages/ErrorPage';
import GameDetails from '../components/GameDetails';
import AuthLayout from '../layout/AuthLayout'; 

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
        { index: true, element: <Home />, },
        { path: "/about", element: <About />, },
        { path: "/all-games", element: <Games />,  },
        { path: "/game/:id", element: <GameDetails />, },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
        {
            path: "/auth/registration", element: <Register />,
        },
        {
            path: "/auth/login", element: <Login />,
        },
        {
            path: "/auth/forgot", element: <Forgot />,
        },
        {
            path: "/auth/my-profile",  element: <Profile />,
        },
    ]
  },  
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default Router;