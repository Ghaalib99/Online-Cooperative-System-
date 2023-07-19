import React, { useState } from "react";
// import jazalogo from "../../assets/images/jazalogo.jpg";
// import jazalogo2 from "../../assets/images/jazalogo2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  let params = useParams();
  let refferalId = params?.id;
  let firstName = params?.firstName;

  const url = refferalId
    ? `/own-earner-register/${firstName}/${refferalId}`
    : "/auth";

  return (
    <>
      <div className="h-20 w-full bg-white py-2 px-6 flex justify-between items-center fixed z-50 shadow-2xl">
        <Link to="/">
          <h1 className="font-bold text-lg lg:text-3xl title text-primary cursor-pointer">
            Luxe
          </h1>
        </Link>

        <div className="hidden md:flex justify-between  font-bold text-lg ">
          <NavLink to='/loans'>
            <div className="cursor-pointer hover:text-light mr-6">Loans</div>
          </NavLink>
          <NavLink to='/investments'>
            <div className="cursor-pointer hover:text-light mr-6">
              Investments
            </div>
          </NavLink>
          <NavLink to='/asset-financing'>
            <div className="cursor-pointer hover:text-light mr-6">
              Asset Financing
            </div>
          </NavLink>
          <NavLink to='/forum'>
            <div className="cursor-pointer hover:text-light mr-6">Forum</div>
          </NavLink>
        </div>

        <div className="flex justify-between w-[210px]">
          <Link to="/register" className="">
            <button className="hidden md:block theme-btn btn-style-four">
              <span className="btn-title">Register</span>
            </button>
          </Link>
          <Link to="/login">
            <button className="hidden md:block theme-btn btn-style-four">
              <span className="btn-title">Login</span>
            </button>
          </Link>
        </div>
        <GiHamburgerMenu
          onClick={handleMobileMenu}
          size={30}
          className="md:hidden text-primary"
        />
      </div>
      {mobileMenu && (
        <div className="bg-[#e9ad53] md:hidden w-full p-4 absolute top-[60px] z-50 cursor-pointer  shadow-2xl">
          <div className=" md:hidden font-bold text-lg ">
          <NavLink to='/loans'>
            <div className="cursor-pointer hover:text-light  p-2  border-b-[1px] hover:bg-opacity-40">Loans</div>
          </NavLink>
          <NavLink to='/investments'>
            <div className="cursor-pointer hover:text-light  p-2  border-b-[1px] hover:bg-opacity-40">
              Investments
            </div>
          </NavLink>
          <NavLink to='/asset-financing'>
            <div className="cursor-pointer hover:text-light  p-2  border-b-[1px] hover:bg-opacity-40">
              Asset Financing
            </div>
          </NavLink>
          <NavLink to='/forum'>
            <div className="cursor-pointer hover:text-light  p-2  border-b-[1px] hover:bg-opacity-40">Forum</div>
          </NavLink>
        </div>

          <div className="mt-4 flex justify-center">
          <Link to="/register" className="block">
            <button className="theme-btn btn-style-four hover:text-[#e9ad53] ">
              Register
            </button>
          </Link>
          <Link to="/login" className="block">
            <button className="theme-btn btn-style-four hover:text-[#e9ad53] ">
              Login
            </button>
          </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
