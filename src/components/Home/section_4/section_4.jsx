import React from "react";
import img_blue from "../../../assets/confused.jpg";
import element from "./Element.png";

function Section_4() {
  return (
    <div>
      <div className="flex flex-col  lg:flex-row lg:w-full px-6 lg:px-20 py-8 -mx-[2]  bg-[#043873] text-white">
        {/* Left side text box*/}
        <div className="w-full lg:w-1/2 px-4 lg:px-10 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
            Find it befitting to your needs
            <img src={element} className="inline ml-2"></img>
          </h1>
          <p className="text-sm lg:text-base mb-4 text-center lg:text-left">
            Cannot follow the way of experts, don’t worry. Find your way of
            learning to be taken into account.
          </p>
          {/* btn */}
          <div className="flex justify-center sm:justify-start">
            <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-300 border-0">
              Let's go
            </button>
          </div>
        </div>
        {/* Right side color box */}
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src={img_blue}
            alt="Blue"
            className="w-full  mx-8 lg:w-[30rem]  h-auto max-w-full   "
          />  
        </div>
      </div>
    </div>
  );
}

export default Section_4;
