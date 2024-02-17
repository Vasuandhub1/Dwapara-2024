import React from "react";
import element_img from './Element_blue.png';

function Section7() {
    return (
        <div className="bg-[#043873] w-full px-4 py-12 lg:py-24 lg:px-20  flex">

                {/* text-box */}
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16    text-center lg:text-left ">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">You study, wherever you are <br></br> <img src={element_img} alt="" className="inline" /></h1>
                    <p className="text-white">Access your schedule from your computer, phone, or tablet by synchronizing with various services, including opportunities and roadmaps. This website is for every background, providing direction from scratch.</p>
                    {/* button */}  
                    <div className="mt-6">
                        <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-300 border-0" aria-label="Start learning">
                            Let's go
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section7;
