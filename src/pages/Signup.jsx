import React from "react";

const Signup = () => {
  return (
    <div className="w-full h-[100vh] bg-black bg-opacity-80 flex justify-center items-center">
      <div className="w-[30%] bg-primary py-4 px-6 rounded-2xl ">
        <h1 className="font-bold text-3xl mb-8 title text-center">Register</h1>
        <form action="" className="w-full">
            <div className="w-full mb-4">
                <label htmlFor="" className="font-bold mb-2 text-lg">Firstname:</label>
                <input type="text" className="block w-full py-2 px-4 rounded-lg outline-none"placeholder="Enter Firstname"/>
            </div>
            <div className="w-full mb-4">
                <label htmlFor="" className="font-bold mb-2 text-lg">Lastname:</label>
                <input type="text" className="block w-full py-2 px-4 rounded-lg outline-none"placeholder="Enter Lastname"/>
            </div>
            <div className="w-full mb-4">
                <label htmlFor="" className="font-bold mb-2 text-lg">Email:</label>
                <input type="email" className="block w-full py-2 px-4 rounded-lg outline-none"placeholder="Enter Email"/>
            </div>
            <div className="w-full mb-4">
                <label htmlFor="" className="font-bold mb-2 text-lg">Occupation:</label>
                <input type="text" className="block w-full py-2 px-4 rounded-lg outline-none"placeholder="Enter Occupation"/>
            </div>
            <div className="w-full mb-4">
                <label htmlFor="" className="font-bold mb-2 text-lg">Password:</label>
                <input type="password" className="block w-full py-2 px-4 rounded-lg outline-none"placeholder="Enter Password"/>
            </div>
            <div className="w-full mb-4">
                <label htmlFor="" className="font-bold mb-2 text-lg">Confirm Password:</label>
                <input type="password" className="block w-full py-2 px-4 rounded-lg outline-none"placeholder="Confirm Password"/>
            </div>
            <button className='bg-black text-white p-4 mb-4 mt-6 w-full rounded-2xl shadow-2xl font-bold'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
