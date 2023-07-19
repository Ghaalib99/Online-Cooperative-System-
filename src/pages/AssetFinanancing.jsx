import React from "react";
import cooperative1 from "../assets/cooperative1.jpg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Engage from "../components/Engage";
import land4 from "../assets/land4.png";
import asset from "../assets/asset.jpg";
import loan2 from "../assets/loan2.jpg";
import loan3 from "../assets/loan3.jpg";

const AssetFinancing = () => {
  return (
    <>
      <Navbar />

      <div className="w-full  lg:grid grid-cols-2 min-h-[100vh]">
        <div className="hidden lg:block h-full ">
          <img src={asset} alt="" className=" w-full h-full object-cover " />
        </div>
        <div className="w-full h-full bg-light bg-opacity-90 text-center p-6 text-white flex justify-center items-center flex-col">
          <h3 className="font-bold text-2xl w-[70%] my-4">
          Acquire Assets with Ease through Luxe Asset Financing!
          </h3>
          <p className="w-[70%] text-xl mb-4">
          At Luxe, we understand that access to modern assets and equipment is essential for individuals and businesses to thrive.
        Our Asset Financing solutions offer you the flexibility to acquire the assets you need without straining your financial resources.
          </p>
          <p className="w-[70%] text-xl mb-4">
          If you are an individual seeking a house, car, or home appliances,
        our Asset Financing options are tailored to suit your specific requirements.
        We partner with leading asset suppliers to provide you with a wide range of quality assets at competitive rates.
          </p>
          <p className="w-[70%] text-xl mb-4">
          With Luxe Asset Financing, you can preserve your working capital and maintain a healthy cash flow while enjoying the benefits of using modern and efficient assets.
        We offer flexible repayment terms and competitive interest rates, making asset acquisition hassle-free and cost-effective.
        Plus, our dedicated team of financial experts is available to assist you in selecting the best financing solution for your needs.
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

export default AssetFinancing;
