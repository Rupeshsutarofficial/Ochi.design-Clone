import React from "react";

function Reviews() {
  const data = [
    {
      name: "Planetly",
      author: "Nina Walloch",
      read: "READ",
    },
    {
      name: "Workiz Easy",
      author: "Tomer Levy",
      read: "READ",
    },
    {
      name: "Premium Blend",
      author: "Ellen Kim",
      read: "READ",
    },
    {
      name: "Hypercare Systems",
      author: "Brendan Goss",
      read: "READ",
    },
    {
      name: "Officevibe",
      author: "Raff Labrie",
      read: "READ",
    },
    {
      name: "Orderlion",
      author: "Stefan Strohmer",
      read: "READ",
    },
    {
      name: "Black Book",
      author: "Jaci Smith",
      read: "READ",
    },
    {
      name: "Trawa Energy",
      author: "David Budde",
      read: "READ",
    },
  ];
  return (
    <div
      className="min-h-screen w-full bg-zinc-100 pt-[4vw] "
      style={{ fontFamily: "NeueMontreal-Regular" }}
    >
      <h1 className="text-[4.3vw] px-5 text-[#181616]">Clients' reviews</h1>
      <div className="w-full border-t-[1px] border-[#9c9c9c] mt-10"></div>
      <div className="flex px-5 py-4">
        <h3 className="text-zinc-700 whitespace-nowrap text-[1.3vw]">
          Karman Ventures
        </h3>
        <div className="flex flex-col gap-3 ml-[15vw]">
          <h3 className="text-zinc-800 pb-10 text-[1.3vw] ">Services:</h3>
          {["INVESTOR DECK", "SALES DECK"].map((item, index) => (
            <a
              key={index}
              className={`text-[1.2vw] mt-5 cursor-pointer hover:text-white hover:bg-zinc-900 transition duration-300 ease-in-out text-center text-zinc-800 px-3 w-fit whitespace-nowrap py-1 rounded-full border-2 border-[#5e5e5e] ${
                index === 1 ? "mt-[0vw]" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex flex-col ml-[13vw]">
          <h3 className="text-zinc-700 pb-16 text-[1.3vw]">William Barnes</h3>
          <div className="h-[8vw] w-[8vw]  rounded-lg overflow-hidden">
            <img
              className="h-full w-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
          </div>
          <p className=" text-zinc-800 w-[67%] pt-6 text-[1.3vw]">
            They were transparent about the time and the stages of the project.
            The end product is high quality, and I feel confident about how they
            were handholding the client through the process. I feel like I can
            introduce them to someone who needs to put a sales deck together
            from scratch, and they would be able to handhold the client
            experience from 0 to 100 very effectively from story to design. 5/5
          </p>
        </div>
        <h5 className="text-zinc-400 text-[1.3vw]">READ</h5>
      </div>
      <div className="w-full border-t-[1px] border-[#9c9c9c] mt-10"></div>
      {data.map((item, index) => {
        return (
          <div className="grid grid-cols-3 px-7 gap-x-[43vw] py-[1.2vw] text-zinc-800  justify-between border-b-[1px] border-[#9c9c9c] text-[1.3vw]">
            <h2 className=" flex w-[12vw] decoration-current underline underline-offset-[3px]">{item.name}</h2>
            <h2 className="flex w-[10vw] ml-6">{item.author}</h2>
            <h2 className="underline underline-offset-[4px]">{item.read}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
