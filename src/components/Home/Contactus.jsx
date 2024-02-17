import React from "react";

function Contactus() {
  return (
    <>
      <div className="flex flex-col justify-between lg:flex-row lg:w-full px-6 lg:px-20 py-8 -mx-[2]  bg-[#043873] text-white">
        {/* left Side div  */}
        <div className="w-full lg:w-1/2 px-4 lg:px-10 flex flex-col justify-start space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
            Contact us{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            perferendis ipsa quam asperiores deleniti veniam praesentium sit
            eveniet reiciendis debitis? Quasi quod necessitatibus id natus,
            pariatur dolor nisi dolorem aliquid.{" "}
          </p>
        </div>

        {/* right side div */}
        <div className="flex  lg: mt-6 lg:mt-0   px-8 py-8 ">
          <div className=" flex flex-col space-y-6">
            <p> Name : </p> <input type="text" />
            <p>Email : </p> <input type="text" />
            <p> What can we help with you ?</p> <input type="text-area" />
            <div className="flex justify-center sm:justify-start">
              <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-300 border-0">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
