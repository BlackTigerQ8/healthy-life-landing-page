import React from "react";
import { Carousel } from "flowbite-react";

import banner from "../assets/strategyplanning.png";
import banner2 from "../assets/mobile-login.png";
import banner3 from "../assets/diet-planning.png";

const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} className="" alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Track your progress{" "}
                <span className="text-brandPrimary leading-snug">
                  with intuitive tools
                </span>
              </h1>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner2} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Gain access to expert{" "}
                <span className="text-brandPrimary leading-snug">
                  advice and support
                </span>
              </h1>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner3} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Receive personalized fitness{" "}
                <span className="text-brandPrimary leading-snug">
                  and nutrition plans
                </span>
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
