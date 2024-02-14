import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate,setRotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
      setRotate(angle-180)
    })
  })
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-[url("./assets/bg1.jpg")] bg-center'>
        <div className="absolute flex gap-12 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div  className="relative w-[10vw] h-[10vw] rounded-full bg-zinc-900 text-[1.5vw]">
            <h5 className="text-white text-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" style={{ fontFamily: "NeueMontreal-Regular" }}>
                PLAY
              </h5>
              <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100 text-center"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className=" relative w-[10vw] h-[10vw] rounded-full bg-zinc-900 ">
            <h5 className="text-white text-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" style={{ fontFamily: "NeueMontreal-Regular" }}>
                PLAY
              </h5>
            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
