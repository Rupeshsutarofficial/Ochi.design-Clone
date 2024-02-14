import React from "react";
import Homepage2 from "../assets/Homepage2.jpg";
function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full p-10 bg-[#CDEA68] rounded-t-3xl text-black"
      style={{ fontFamily: "NeueMontreal-Regular" }}
    >
      <h1
        className="text-[4.2vw] leading-none mt-16"
        style={{ fontFamily: "NeueMontreal-Regular" }}
      >
        Ochi is a strategic partner for fast-grow­ing tech <br />
        businesses that need to&nbsp;
        <span style={{ borderBottom: "3.5px solid" }}>raise funds</span>,&nbsp;
        <span style={{ borderBottom: "3.5px solid" }}>sell products</span>,
        <br />
        <span style={{ borderBottom: "3.5px solid" }}>
          explain complex ideas
        </span>
        , and&nbsp;
        <span style={{ borderBottom: "3.5px solid" }}>hire great people</span>.
      </h1>

      <div className="w-full grid grid-cols-3 border-t-[1px] pt-14 pb-11 mt-12 border-[#99AD53]">
        <div className="mt-[-2vw] text-[1.3vw]">
          <h1>What you can expect:</h1>
        </div>
        <div className="py-1 gap-10 mt-[-2vw] ml-[17vw] text-[1.3vw]">
          <p className="w-[25vw]">
            We create tailored presentations to help <br /> you persuade your
            colleagues, clients, or <br /> investors. Whether it’s live or
            digital,
            <br />
            delivered for one or a hundred people.
          </p>
          <br />
          <p className="w-[25vw]">
            We believe the mix of strategy and <br /> design (with a bit of
            coffee) is what <br /> makes your message clear, convincing,
            <br /> and captivating.
          </p>
        </div>
        <div className="ml-[27vw] mt-[7vw] text-[1.3vw]">
          S: <br />
          <span style={{ borderBottom: "1px solid" }}>Instagram</span> <br />
          <span style={{ borderBottom: "1px solid" }}>Behance</span> <br />
          <span style={{ borderBottom: "1px solid" }}>Facebook</span> <br />
          <span style={{ borderBottom: "1px solid" }}>Linkedin</span>
        </div>
      </div>
      <div className="w-full flex gap-[7vw] border-t-[1px] pt-10 mt-12 border-[#99AD53]">
        <div className="w-1/2 -mt-10 ml-[-1vw]">
          <h1 className="text-[4.2vw]">Our approach:</h1>
          <button className=" text-[1.2vw] flex gap-10 items-center px-8 py-5 bg-zinc-900 mt-1 rounded-full text-white uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 scale-[1.1] h-[90vh] -mt-[-0.5vw] ">
          <img className="rounded-2xl " src={Homepage2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
