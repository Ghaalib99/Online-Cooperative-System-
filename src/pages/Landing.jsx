import React from "react";
import cooperative1 from "../assets/cooperative1.jpg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Engage from "../components/Engage";
import land4 from "../assets/land4.png";
import land2 from '../assets/land2.jpg'

const Landing = () => {
  return (
    <div className="w-full bg-primary ">
      <Navbar />
      <div className="w-full  lg:grid grid-cols-2 gap-4 h-[100vh] relative">
        <img src={land4} alt="" className="absolute top-[-150px] right-0" />
        <div className="p-6 flex items-center text-white ">
          <div className=" w-[70%] mx-auto mt-40 z-10 lg:mt-0 ">
            <h1 className="mb-6 text-2xl title text-center lg:text-left md:text-4xl leading-[50px] lg:leading-[65px]">
              Online Cooperative System
            </h1>
            <h1
              className="mb-6 text-4xl text-center lg:text-left md:text-4xl leading-[50px] lg:leading-[65px] lg:mb-4 font-bold"
              style={{ fontFamily: "Raleway" }}
            >
              Secure Your Future Now
            </h1>
            <p className=" leading-7  text-center lg:text-left text-sm md:text-base mb-6">
              A secure online cooperative platform with 100%
              automated seamless process.
            </p>

            <p
              className=" leading-7  text-center lg:text-left text-sm md:text-base mb-6"
              style={{ color: "#e9ad53" }}
            >
              <strong>
                It does not matter whether you are a salary earner or an enterprenuer, our packages are carefully curated to cater for people of various means of income.
              </strong>
            </p>

            <p className=" leading-7  text-center lg:text-left text-sm md:text-base mb-6">
              Join now and start making plans for your future. Spend less! Save more!
            </p>
          </div>
        </div>
        <div>
          <div className="hidden lg:block w-full lg:mt-10 lg:w-[50%] h-[100%]">
            {/* <img src={cooperative1} alt="" className="rounded-full " /> */}
          </div> 
        </div>
      </div>

      <section className="bg-[#edf8f6] pt-10 pb-5">
        <div className="auto-container mb-10">
          <Engage
            first_step="Start saving from your earnings and have access to double your savings in just 4 months"
            second_step="   Enjoy asset financing from the organization on ammenities like houses, cars, freezers and refridgerators, power generating sets, e.t.c. "
            third_step="    Get the chance to safely invest your money in highly profitable and secure businesses run by the organization"
            howToOur={true}
            remove3rdButton={true}
            call_to_action={
              <div
                class="btn-box veriff-first"
                style={{
                  display: "block",
                  textAlign: "center",
                }}
              >
                <Link to="/register">
                  <button
                    data-toggle="modal"
                    data-target="#landingModal"
                    class="theme-btn btn-style-four mb-4"
                  >
                    <span class="btn-title">Start your journey here</span>
                  </button>
                </Link>
              </div>
            }
          />
        </div>
      </section>

      {/* About Us */}
      <section className="w-full bg-[#daf1ec] py-6">
        <div className="w-[90%] mx-auto my-2  ">
          <div className="lg:grid grid-cols-1">
            <div>
              <h2 className="text-[#000] text-xl lg:text-[2rem] font-bold leading-[3.5rem]">
                More About Us
              </h2>

              <p className="text-xl leading-10 text-[#7A7A7A] mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus sunt, ex fugiat sit autem fuga hic maxime. Sunt accusantium pariatur voluptatum eveniet in accusamus corporis voluptate consequatur quod natus ullam, temporibus ipsum tenetur voluptas. Consequuntur aut veritatis odio voluptas!
              </p>

              <div class="imglist">
                <ul>
                  <li>
                    1 unit of Own-Earner purchase is equivalent to 1 sqm of land
                    purchase.{" "}
                  </li>
                  <li>
                    You can sell or transfer your ownership anytime from a 24
                    months holding period.
                  </li>
                  <li>
                    Get instant physical Allocation when you fully purchase land
                    units equivalent to ¼ Plot, ½, 1, and multiple numbers of
                    plot.{" "}
                  </li>
                  <li>
                    Secured tokenized landed property investments whose profit
                    appreciation matches with live market trends.
                  </li>
                  <li>
                    Only low-risk, high-value appreciation properties with the
                    right Title Documentation are listed for our users'
                    purchase.{" "}
                  </li>
                  <li>You own your profit 100% upon resell.</li>

                  <li>You have 2 types of purchase options: </li>
                  <div
                    id="inner-list"
                    style={{ paddingLeft: 70, marginTop: -25 }}
                  >
                    <ol>
                      <li>One-time Purchase = Buy Once Only.</li>
                      <li>
                        Recurrent Purchase = Buy little by little at regular
                        intervals according to your set goal.
                      </li>
                    </ol>
                  </div>
                  <li>To earn money through this Own-Earner partnership: </li>
                  <div
                    id="inner-list"
                    style={{ paddingLeft: 70, marginTop: -25 }}
                  >
                    <ol>
                      <li>
                        You can request to sell-off your property units starting
                        from a 2 years holding period. OR
                      </li>
                      <li>
                        Through a 10% automatic instant referral reward at every
                        sale connected to your link on your dashboard.{" "}
                      </li>
                    </ol>
                  </div>
                </ul>

                <div
                  class="btn-box veriff-first"
                  style={{
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  <Link to="/Login to your dashboard">
                    <button
                      data-toggle="modal"
                      data-target="#landingModal"
                      class="theme-btn btn-style-four mb-4"
                    >
                      <span class="btn-title">Sign In to your dashboard</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="w-full bg-[#0e2721] text-center text-white text-xl leading-8 p-4"
        style={{ fontFamily: "Raleway" }}
      >
        <p className="mb-6 font-bold">
          Online Cooperative Society. COPYRIGHT@2023
        </p>
      </footer>
    </div>
  );
};

export default Landing;
