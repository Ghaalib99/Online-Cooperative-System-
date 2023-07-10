import React from "react";
import { useNavigate } from "react-router-dom";
import Ellipse120pic from "../assets/Ellipse120pic.svg";
import { MdArrowBackIos } from "react-icons/md";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-20 mb-4 w-full bg-white py-2 px-6 flex justify-between items-center  z-50 shadow-2xl">
        <Link to="/">
          <h1 className="font-bold text-lg lg:text-3xl title text-primary cursor-pointer">
            Online Cooperative System
          </h1>
        </Link>
        <div className="flex justify-between w-[210px]"></div>
      </div>

      <div className="w-[90%] mx-auto  p-4">
        <div className=" h-[50px] mb-[10px] flex items-center cursor-pointer">
        
          <h1 className="ml-8 font-bold text-3xl ">Profile</h1>
        </div>
        <div className="block lg:flex  justify-between gap-4 mb-4">
          <div className=" lg:w-[35%] bg-white mb-6 lg:mb-0 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   p-4">
            <div className="h-[200px] relative w-full flex justify-center items-center">
              <img
                src={Ellipse120pic}
                alt=""
                className="block rounded-full h-[120px] w-[120px] lg:h-[180px] lg:w-[180px] "
              />
            </div>
            <div className="mt-auto text-center w-full">
              <div className="flex w-full justify-center mb-[1px] p-2 text">
                <MdArrowBackIos sx={{ marginRight: "5px" }} />
                <p>
                  <span className="font-bold">Fullname: </span>John Doe
                </p>
              </div>
              <div className="flex w-full justify-center mb-[1px] p-2">
                <MdArrowBackIos sx={{ marginRight: "5px" }} />
                <p>
                  <span className="font-bold">Email: </span>
                  johndoe@hotmail.com
                </p>
              </div>
              <div className="flex w-full justify-center mb-[1px] p-2">
                <MdArrowBackIos sx={{ marginRight: "5px" }} />
                <p>
                  <span className="font-bold">Phone Number: </span>+234 7011
                  2233
                </p>
              </div>
              <div className="flex w-full justify-center mb-[1px] p-2">
                <MdArrowBackIos sx={{ marginRight: "5px" }} />
                <p>
                  <span className="font-bold">Location: </span>Ogbomoso
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:w-[65%] bg-white rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  p-4">
            <h2 className="font-bold text-3xl mb-8">Dashboard</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              <div className="w-[]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-[8px] p-4 ">
                <div className="font-bold">
                  <p className="text-[13px] mb-4">Savings Per Month</p>
                  <p className="block text-xl  text-light">50,000</p>
                </div>
              </div>

              <div className="w-[]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-[8px] p-4 ">
                <div className="font-bold">
                  <p className="text-[13px] mb-4">Total Savings</p>
                  <p className="block text-xl  text-light">1,300,000</p>
                </div>
              </div>
              <div className="w-[]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-[8px] p-4 ">
                <div className="font-bold">
                  <p className="text-[13px] mb-4">Oustanding Loan Payments</p>
                  <p className="block text-xl  text-light">0</p>
                </div>
              </div>

              <div className="w-[]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-[8px] p-4 ">
                <div className="font-bold">
                  <p className="text-[13px] mb-4">Current Month ROI</p>
                  <p className="block text-xl  text-light">15,000</p>
                </div>
              </div>

              <div className="w-[]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-[8px] p-4 ">
                <div className="font-bold">
                  <p className="text-[13px] mb-4">Total ROI</p>
                  <p className="block text-xl  text-light">45,000</p>
                </div>
              </div>

              <div className="w-[]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-[8px] p-4 ">
                <div className="font-bold">
                  <p className="text-[13px] mb-4">Account Balance</p>
                  <p className="block text-xl  text-light">1,345,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
