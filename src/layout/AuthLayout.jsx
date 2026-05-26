import React from "react";
import logoImage from "../assets/Gamelogoo.png";
import { Link, NavLink, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header className="navbar-start px-10 py-2 ">
        <Link to="/" className="flex justify-center items-center">
          <img src={logoImage} alt="" className="w-8 h-8" />
          <p className="btn btn-ghost border-none p-1 text-2xl  text-one">GameHub</p>
        </Link>
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
