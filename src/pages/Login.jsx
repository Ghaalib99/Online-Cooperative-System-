import React from "react";

const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-black bg-opacity-80 flex justify-center items-center">
      <div className="w-[30%] bg-primary py-4 px-6 rounded-2xl ">
        <h1 className="font-bold text-3xl mb-8 title text-center">Login</h1>
        <form action="" className="w-full">
           
            <div className="w-full mb-4">
                <label htmlFor="" className="font-bold mb-2 text-lg">Email:</label>
                <input type="email" className="block w-full py-2 px-4 rounded-lg outline-none"placeholder="Enter Email"/>
            </div>
            
            <div className="w-full mb-4">
                <label htmlFor="" className="font-bold mb-2 text-lg">Password:</label>
                <input type="password" className="block w-full py-2 px-4 rounded-lg outline-none"placeholder="Enter Password"/>
            </div>
           
            <button className='bg-black text-white p-4 mb-4 mt-6 w-full rounded-2xl shadow-2xl font-bold'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
