import React from "react";
import logoImage from "../assets/Gamelogoo.png";
import { Link,NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import MyContainer from "./MyContainer";



const Navbar = () => {

  const getNavActive = ({ isActive }) => {
    const navLinkActive = "text-[16px] sm:text-[20px] font-semibold text-one";
    const navLink = "text-[16px] sm:text-[20px] font-medium";

    return isActive ? navLinkActive : navLink; 
  };



  return (
    <nav>
      
      <div className="navbar bg-base-100 shadow-sm ">
         
          {/* // small device */}
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  ">
              <li> <NavLink to="/" className={getNavActive}>  Home </NavLink>
              </li>
              <li> <NavLink to="/about" className={getNavActive}> About </NavLink>
              </li>
              {/* <li> <NavLink to="/installation" className={getNavActive}> 
                      Installation </NavLink>
              </li> */}
            </ul>
          </div>

        {/* Desktop */}
        <div className="navbar-start">
          <Link to="/" >
            <div className="flex justify-center items-center">
              <img src={logoImage} alt="" className="w-8 h-8"/>
              <p className="btn btn-ghost p-1 text-2xl  text-one">
               GameHub
              </p>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4">
            <li> <NavLink to="/" className={getNavActive}>  Home </NavLink>
            </li>
            <li>  <NavLink to="/about" className={getNavActive}>   About </NavLink>
            </li>
            {/* <li> <NavLink to="/installation" className={getNavActive}>    Installation </NavLink>
            </li> */}
          </ul>
        </div>

        <div className="navbar-end  gap-3">
         <div className="navbar-end  hidden md:flex gap-2">
           <a href="" target="_blank"  className="my-btn"> 
              Register</a>
           <a href="" target="_blank"  className="my-btn"> 
              Login</a>
         </div>
          
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
