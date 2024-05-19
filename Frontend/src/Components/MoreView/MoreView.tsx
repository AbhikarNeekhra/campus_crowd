import React from "react";
import "./MoreView.css";

export default function MoreView() {
  return (
    <>
      <h3 className="mhead3 px-5 py-3 h-fit w-full text-4xl font-bold">
        Top Projects
      </h3>
      <div className="h-[36vh] w-full">
        <div className="h-[30vh] w-full flex justify-between items-center">
          <div className="h-full w-[32%] bg-blue-300 rounded-xl">
            <img
              className="h-full w-full"
              src="/public/1q9a51511.jpg"
              alt="something"
            />
          </div>
          <div className="h-full w-[32%] bg-blue-300 rounded-xl">
            <img
              className="h-full w-full"
              src="/public/1_AfP4pv8JqEVYF3Xrp8ubGg.png"
              alt="something"
            />
          </div>
          <div className="h-full w-[32%] bg-blue-300 rounded-xl">
            <img
              className="h-full w-full"
              src="public/poster-competition_2.png"
              alt="something"
            />
          </div>
        </div>
        <div className="h-fit w-full text-white hover:text-black bg-[rgba(0,0,0,0.4)] cursor-pointer hover:bg-[rgba(255,255,255,0.4)] hover:-translate-y-16 hover:h-28 delay-100 ease-in-out transition-all text-3xl font-bold text-center py-1">
          Show More
        </div>
      </div>
    </>
  );
}
