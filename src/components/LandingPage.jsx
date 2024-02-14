import { motion } from "framer-motion";
import React from "react";
import awward from "../assets/awward.png"

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-100 pt-1">
      <div class="scale-50 origin-top-right md:scale-100 absolute top-[15vw] lg:top-150 right-0 mr-2" >
			<a href="https://www.awwwards.com/sites/ochi-design" target="_blank">
      <img className="scale-[1.6] " src={awward} alt="" />
			</a>
		</div>
      <div className="textstructure scale-[0.9] mt-40 ml-[-5vw] px-5 text-zinc-800">
        {["We Create", "Eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1] ,duration:1}}
                    className="mr-5 w-[9vw] rounded-md h-[5.7vw] relative -top-[0.1vw] bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"
                  ></motion.div>
                )}
                <h1
                  className="uppercase text-[9vw] leading-[7vw] font-medium"
                  style={{ fontFamily: "Founders Grotesk" }}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] text-zinc-800 border-zinc-800 mt-[10.5vw] flex justify-between items-center py-5 px-6"style={{ fontFamily: "NeueMontreal-Regular" }}>
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-[1.3vw] font-light tracking-tight leading-none"style={{ marginLeft: index === 1 ? "8vw" : "0" }}>
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-3 py-1 border-[1.8px] text-zinc-70 border-zinc-800 text-[1.1vw] uppercase rounded-full hover:bg-zinc-900 cursor-pointer hover:text-white transition duration-300 ease-in-out">
            START THE PROJECT
          </div>
          </div>
        </div>
      </div>
  );
}

export default LandingPage;
