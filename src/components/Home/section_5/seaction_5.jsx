import React from "react";
import img_blue from "../../../assets/Test.jpg";
import element from "./Element.png";

function Section_5() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:w-full px-6 lg:px-20 py-8 mx-10 my-10">
        {/* Right side color box */}
        <div className="flex justify-center lg:justify-start mt-6 lg:mt-0">
          <img
            src={img_blue}
            alt="Blue"
            className="w-full lg:w-[30rem] h-auto max-w-full"
          />
        </div>

        {/* Left side text box*/}
//         <div className="w-full lg:w-1/2 px-4  lg:px-10 py-10 flex flex-col justify-center">
//           <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
// <<<<<<< tanishq
//             Don't deny your destiny
//             <img src={element} className="inline ml-2"></img>
//           </h1>
//           <p className="text-sm lg:text-base mb-4 text-center lg:text-left">                                                                                                     
//             In this era of digital revolution do not fall back in the automation and intellegentselection of schedules
// =======
//             Find it befitting to your needs
//             <img src={element} className="inline ml-2"></img>
//           </h1>
//           <p className="text-sm lg:text-base mb-4 text-center lg:text-left">                                                                                                     
//             Cannot follow the way of experts, don’t worry. Find your way of
//             learning to be taken into account.
// >>>>>>> main
//           </p>
//           <div className="flex justify-center sm:justify-start">
//             <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-300 border-0">
//               Let's go
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Section_5;
