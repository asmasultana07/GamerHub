import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col  justify-center items-center min-h-screen">
      <div className="card my-bg w-full max-w-md shrink-0 shadow-xl">
        <h2 className="flex justify-center items-center mt-3 font-bold text-white text-3xl">
          Login
        </h2>
        <form className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label text-sm text-base-100 font-medium  my-2">
              Email
            </label>
            <input required
              type="email"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {/* password */}
            <div className="flex flex-col">
              <label className="label text-sm text-base-100 font-medium  my-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input required
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 cursor-pointer text-slate-200 hover:text-white/50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </button>
              </div>
            </div>
            <div className="flex justify-end pr-1">
              <Link to="" className="link link-hover text-blue-400">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="btn btn-secondary mt-4">Login</button>

            <div className="flex justify-center items-center gap-2 my-2">
              <div className="h-px w-12 bg-white"> </div>
              <span className="text-white"> or </span>
              <div className="h-px w-12 bg-white"> </div>
            </div>
            <button className="btn bg-slate-200  border-none">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-4 h-4"
              />
              Continue with Google
            </button>
            <p className="text-white flex justify-center gap-1 pt-4">
              Don't have an account?
              <Link
                to="/auth/registration"
                className="link text-pink-300 font-bold"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
