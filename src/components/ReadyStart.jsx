import React, { useEffect, useState } from "react";
import Question from '../assets/question.png'
function ReadyStart() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);
  return (
    <div data-scroll data-scroll-call="progress-sticky" data-scroll-speed="-.4"
      className=" relative w-full h-[170vh] bg-[#CDEA68] rounded-t-3xl "style={{ fontFamily: "Founders Grotesk" }}
    >
      <div className="flex items-center uppercase gap-2 justify-center flex-col leading-[10vw]">
      <h1 className="text-[14vw] mt-[5vw] text-[#212121]">READY</h1>
      <h1 className="text-[14vw] text-[#212121]">TO START</h1>
      <h1 className="text-[14vw] text-[#212121] flex">THE PROJECT<img className="w-[8vw] mt-[-1vw]" src={Question}></img> </h1>
      </div>
      <div data-scroll data-scroll-section data-scroll-speed=".1"
      
      className="w-fit h-fit absolute top-[45%] left-[35%] -translate-x-[50%] -translate-y-[40%] flex gap-10">
        <div className=" relative rounded-full w-[14vw] h-[14vw] bg-white">
          <div className="rounded-full absolute w-[8vw] h-[8vw] bg-zinc-900 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line w-full relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="bg-white rounded-full w-[1.3vw] h-[1.3vw]"></div>
            </div>
          </div>
        </div>
        <div className=" relative rounded-full w-[14vw] h-[14vw] bg-white">
          <div className="rounded-full absolute w-[8vw] h-[8vw] bg-zinc-900 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line w-full relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="bg-white rounded-full w-[1.3vw] h-[1.3vw]"></div>
            </div>
          </div>
        </div>
      </div>
      <button className="flex gap-14 items-center px-6 py-5 bg-zinc-900 mt-[18vw] translate-x-[40vw] rounded-full text-white text-lg uppercase" style={{ fontFamily: "NeueMontreal-Regular" }}>
      START THE PROJECT
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
              <h1 className="flex text-[#212121] mt-5 text-[1.3vw] items-center justify-center"style={{ fontFamily: "NeueMontreal-Regular" }}>OR</h1>
              <button className="flex border-2 border-zinc-900 gap-10 items-center px-6 py-5  mt-[1vw] translate-x-[40vw] rounded-full text-[#212121] text-lg uppercase" style={{ fontFamily: "NeueMontreal-Regular" }}>
              hello@ochi.design
            <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
          </button>
    </div>
  );
}

export default ReadyStart;
