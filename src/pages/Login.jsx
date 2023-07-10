import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <div className="h-20 fixed  w-full bg-white py-2 px-6 flex justify-between items-center  z-50 shadow-2xl">
     <Link to="/">
       <h1 className="font-bold text-3xl title text-primary cursor-pointer">
         Online Cooperative System
       </h1>
     </Link>

     <div className="flex justify-between w-[210px]"></div>
   </div>
    <div className="w-full h-[100vh] bg-white  flex justify-center items-center">
      <div className="w-[30%] bg-primary py-4 px-6 rounded-2xl ">
        <h1 className="font-bold text-3xl mb-8 text-white  text-center">
          Login
        </h1>
        <form action="" className="w-full">
          <div className="w-full mb-4">
            <label htmlFor="" className="text-white font-bold mb-2 text-lg">
              Email:
            </label>
            <input
              type="email"
              className="block w-full py-2 px-4 rounded-lg outline-none"
              placeholder="Enter Email"
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="" className="text-white font-bold mb-2 text-lg">
              Password:
            </label>
            <input
              type="password"
              className="block w-full py-2 px-4 rounded-lg outline-none"
              placeholder="Enter Password"
            />
          </div>

          <Link to="/profile">
            <button className="bg-light p-4 mb-4 mt-6 w-full rounded-2xl shadow-2xl font-bold">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
