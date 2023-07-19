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
        <div className="hidden lg:block h-full ">
          <img src={invest} alt="" className=" w-full h-full object-cover " />
        </div>
        <div className="w-full h-full bg-light bg-opacity-90 text-center p-6 text-white flex justify-center items-center flex-col">
          <h3 className="font-bold text-2xl w-[70%] my-4">
          Invest with Confidence at Luxe!
          </h3>
          <p className="w-[70%] text-xl mb-4">
          At Luxe, you can grow your wealth through smart and secure investments.
        Investing with Luxe offers you the opportunity to participate in a range of diverse and rewarding investment options,
        allowing you to achieve your financial goals with confidence.
          </p>
          <p className="w-[70%] text-xl mb-4"> With Luxe, you gain access to a diverse range of investment products, from high-growth ventures to stable income-generating assets.
        We employ rigorous due diligence and risk assessment processes to ensure that every investment opportunity is of high quality and aligned with your financial aspirations.
        Rest assured that your investments are handled with the utmost professionalism and security.</p>
          <button className="bg-primary font-bold w-[200px] h-[50px] my-6 rounded-xl">
            Invest Now
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
