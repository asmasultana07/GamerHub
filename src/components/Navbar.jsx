import React, { use } from "react";
import logoImage from "../assets/Gamelogoo.png";
import userIcon from "../assets/userIcon.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import MyContainer from "./MyContainer";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const getNavActive = ({ isActive }) => {
    const navLinkActive = "text-[16px] sm:text-[20px] font-semibold text-one";
    const navLink = "text-[16px] sm:text-[20px] font-medium";

    return isActive ? navLinkActive : navLink;
  };

  // for user
  const { user } = use(AuthContext);

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start   ">
          {/* // small device - hamburger menu*/}
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={getNavActive}>Home</NavLink></li>
              <li><NavLink to="/all-games" className={getNavActive}>All Games</NavLink></li>
             </ul>
          </div>

          {/* Desktop */}
          <Link to="/" className="flex justify-center items-center">
            <img src={logoImage} alt="" className="w-8 h-8" />
            <p className="btn btn-ghost border-none p-1 text-2xl  text-one">
              GameHub
            </p>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4">
            <li><NavLink to="/" className={getNavActive}>Home</NavLink> </li>
            <li><NavLink to="/all-games" className={getNavActive}>All Games</NavLink></li>           
          </ul>
        </div>

        {/* end side */}
        <div className="navbar-end  gap-3">
          
            {user ? (
             <div className="navbar-end  hidden md:flex gap-2">
               <img className="w-10 rounded-full"
               src={`${user ? user.photoUrl : userIcon}`} alt="" />
            <Link to="/auth/logout" className="my-btn">
              LogOut
            </Link>
             </div>
            ) : (
             <div className="navbar-end  hidden md:flex gap-2">
               <Link to="/auth/registration" className="my-btn">
              Register
            </Link>
            <Link to="/auth/login" className="my-btn">
              Login
            </Link>
             </div>
            )}
            
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
