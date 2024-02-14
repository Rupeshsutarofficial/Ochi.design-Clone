import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import './buttonAnime.css'
function FeatureProject() {
  const cards = [useAnimation(), useAnimation(),useAnimation(),useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  const tags = [
    {
      tag1: "AUDIT",
      tag2: "COPYWRITING",
      tag3: "SALES DECK",
      tag4: "SLIDES DESIGN",
    },
    {
      tag1: "AGENCY",
      tag2: "COMPANY PRESENTATION",

    },
    {
      tag1: "BRAND IDENTITY",
      tag2: "DESIGN RESEARCH",
      tag3: "INVESTOR DECK",
    },
    {
      tag1: "BRAND TEMPLATE",
    },
  ];
  return (
    <div
      className="w-full py-[6vw] rounded-t-3xl bg-zinc-100"
      style={{ fontFamily: "NeueMontreal-Regular" }}
    >
      <div className="w-full px-8 border-b-[1px] border-[#9c9c9c] pb-10">
        <h1 className="text-[4vw] text-[#181616]">Featured projects</h1>
      </div>
      <div className="px-8 pr-8">
        <div className="cards w-full flex gap-4 mt-14">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)} 
            className="cardcontainer relative w-1/2 h-[80vh]"
          > 
          <h5 class="text-lg mb-5 text-[#181616]"><span class="inline-block h-3 w-3 bg-zinc-900 rounded-full mr-2"></span>FYDE</h5>
            <h1
              className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl tracking-tight font-semibold text-[#CDEA68]"
              style={{ fontFamily: "Founders Grotesk" }}
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ease:[0.22,1,0.36,1],delay: index*.02}}
                  className="inline-block"
                >
                {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="relative tag flex items-center overflow-hidden gap-3 mt-5 text-md">
                {Object.values(tags[0]).map((tag, index) => {
                  if (tag) {
                    return (
                      <div className="buttonAnimation">
                      <h4><a href="">
                      {tag}
                    </a></h4></div>
                    );
                  }
                })}
              </div>
          </motion.div>
          <motion.div 
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)} 
          className="cardcontainer relative w-1/2 h-[80vh]">
            <h5 class="text-lg mb-5 text-[#181616]"><span class="inline-block h-3 w-3 bg-zinc-900 rounded-full mr-2"></span>VISE</h5>
            <h1
              className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl tracking-tight font-semibold text-[#CDEA68]"
              style={{ fontFamily: "Founders Grotesk" }}
            >
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ease:[0.22,1,0.36,1],delay: index*.02}}
                  className="inline-block"
                >
                {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="relative tag flex items-center gap-3 mt-5 text-md">
                {Object.values(tags[1]).map((tag, index) => {
                  if (tag) {
                    return (
                      <div className="buttonAnimation">
                      <h4><a className="hover:text-white" href="">
                      {tag}
                    </a></h4></div>
                    );
                  }
                })}
              </div>
          </motion.div>
        </div>
      </div>
      <div className="px-8 pr-8 ">
        <div className="cards w-full flex gap-4 mt-[10vw]">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)} 
            className="cardcontainer relative w-1/2 h-[80vh]"
          > 
          <h5 class="text-lg mb-5 text-[#181616]"><span class="inline-block h-3 w-3 bg-zinc-900 rounded-full mr-2"></span>TRAWA</h5>
            <h1
              className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl tracking-tight font-semibold text-[#CDEA68]"
              style={{ fontFamily: "Founders Grotesk" }}
            >
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ease:[0.22,1,0.36,1],delay: index*.02}}
                  className="inline-block"
                >
                {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="relative tag flex items-center gap-3 mt-5 text-md">
                {Object.values(tags[2]).map((tag, index) => {
                  if (tag) {
                    return (
                      <div className="buttonAnimation">
                      <h4><a className="hover:text-white" href="">
                      {tag}
                    </a></h4></div>
                    );
                  }
                })}
              </div>
          </motion.div>
          <motion.div 
          onHoverStart={() => handleHover(3)}
          onHoverEnd={() => handleHoverEnd(3)} 
          className="cardcontainer relative w-1/2 h-[80vh]">
            <h5 class="text-lg mb-5 text-[#181616]"><span class="inline-block h-3 w-3 bg-zinc-900 rounded-full mr-2"></span>PREMUIM BLEND</h5>
            <h1
              className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl tracking-tight font-semibold text-[#CDEA68]"
              style={{ fontFamily: "Founders Grotesk" }}
            >
              {"PREMUIM BLEND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ease:[0.22,1,0.36,1],delay: index*.01}}
                  className="inline-block"
                >
                {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="relative tag flex items-center gap-3 mt-5 text-md">
                {Object.values(tags[3]).map((tag, index) => {
                  if (tag) {
                    return (
                      <div className="buttonAnimation">
                      <h4><a className="hover:text-white" href="">
                      {tag}
                    </a></h4></div>
                    );
                  }
                })}
              </div>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center scale-[1.08] mt-[13vw] justify-center"style={{ fontFamily: "NeueMontreal-Regular" }}>
      <button className="flex gap-10 items-center px-6 py-5 bg-zinc-900 mt-6 rounded-full text-white uppercase" style={{ fontFamily: "NeueMontreal-Regular" }}>
      VIEW ALL CASE STUDIES
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
      </div>
    </div>
  );
}

export default FeatureProject;
