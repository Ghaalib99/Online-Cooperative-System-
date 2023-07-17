import React from "react";
import cooperative1 from "../assets/cooperative1.jpg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Engage from "../components/Engage";
import invest from "../assets/invest.jpg";
import asset from "../assets/asset.jpg";
import loan2 from "../assets/loan2.jpg";
import loan3 from "../assets/loan3.jpg";

const Investment = () => {
  return (
    <>
      <Navbar />

      <div className="w-full  lg:grid grid-cols-2 h-[100vh]">
        <div className=" h-full ">
          <img src={invest} alt="" className=" w-full h-full object-cover " />
        </div>
        <div className="bg-light bg-opacity-90 text-center p-6 text-white flex justify-center items-center flex-col">
          <h3 className="font-bold text-2xl w-[70%] my-4">
            Luxe Online Cooperative Platform grants you access to Investment
            that are payable over a long period of time at very low interests.
          </h3>
          <p className="w-[70%] text-xl">
            Investment are granted based on the credit limit of each
            individual Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officia magni nihil ratione.
          </p>
          <button className="bg-primary font-bold w-[200px] h-[50px] my-6 rounded-xl">
            Apply Now
          </button>
        </div>
      </div>

      <footer
        className="w-full bg-[#0e2721] text-center text-white text-xl leading-8 p-4"
        style={{ fontFamily: "Raleway" }}
      >
        <p className="mb-6 font-bold">LUXE. COPYRIGHT@2023</p>
      </footer>
    </>
  );
};

export default Investment;
