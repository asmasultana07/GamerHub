import { use, useContext, useState } from "react";
import { Link } from "react-router"; 
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
  useTitle("Register");
  const [show, setShow] = useState(false);
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, password, email);
    createUser(email, password)
    .then((result) => { 
    const user = result.user;
    // console.log(user);
    }) 
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // alert(errorMessage);
    });
  };

  return (
    <>
      <div className="flex flex-col  justify-center items-center min-h-screen">
        <div className="card my-bg w-full max-w-md shrink-0 shadow-xl">
          <h2 className="flex justify-center items-center mt-3 font-bold text-white text-3xl">
            Register
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label text-sm text-base-100 font-medium">
                Name
              </label>
              <input required
                type="text"
                name="name"
                placeholder="Your full name"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {/* email */}
              <label className="label text-sm text-base-100 font-medium mt-2">
                Email
              </label>
              <input required
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {/* photo */}
              <label className="label text-sm text-base-100 font-medium  mt-2">
                PhotoUrl
              </label>
              <input required
                type="text"
                name="photo"
                placeholder="Your photo URL here"
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
                <button type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 cursor-pointer text-slate-200 hover:text-white/50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </button>
                </div>
              </div>

              <button type="submit" className="btn btn-secondary mt-10">Register</button>
               <p className="text-white flex justify-center gap-1 pt-3">
                Already have an account?
                <Link
                  to="/auth/login"
                  className="link text-pink-400 font-bold"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
