import React from "react";
import cooperative1 from "../assets/cooperative1.jpg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Engage from "../components/Engage";
import land4 from "../assets/land4.png";
import land2 from "../assets/land2.jpg";
import loan2 from "../assets/loan2.jpg";
import loan3 from "../assets/loan3.jpg";

const Loans = () => {
  return (
    <>
      <Navbar />

      <div className="w-full  lg:grid grid-cols-2 h-[100vh]">
        <div className="hidden lg:block h-full ">
          <img src={loan3} alt="" className=" w-full h-full object-cover " />
        </div>
        <div className="w-full h-full bg-light bg-opacity-90 text-center p-6 text-white flex justify-center items-center flex-col">
          <h3 className="font-bold text-2xl w-[70%] my-4">
            Welcome to Luxe loans!
          </h3>
          <p className="w-[70%] text-xl mb-4">
          At Luxe, we believe in empowering individuals by providing access to affordable and flexible loans.
        Our mission is to help you achieve your goals and dreams without financial burdens.
        Whether it's for a business venture, education, or any other personal needs,
        our low-interest loans are designed to fit your financial situation.
          </p>
          <p className="w-[70%] text-xl">
          We understand that each individual has unique credit worthiness,
        and that's why we assess the credit limit of each applicant to offer customized loan solutions.
        You can trust Luxe to provide transparent and secure lending services.
          </p>
          <Link to="/loans/loan-application">
            <button className="bg-primary font-bold w-[200px] h-[50px] my-6 rounded-xl">
              Apply Now
            </button>
          </Link>
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

export default Loans;
