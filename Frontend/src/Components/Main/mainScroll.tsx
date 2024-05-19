import React, { useState, useEffect } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { GoDot, GoDotFill } from "react-icons/go";
import Sidebar from "../Sidebar/sidebar";
import TopProjects from "./topProjects";
import Header from "../Header/header";

export default function MainScroll() {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDotIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const forward = () => {
    setActiveDotIndex((prevIndex) => (prevIndex + 1) % 6);
  };

  const backward = () => {
    setActiveDotIndex((prevIndex) => (prevIndex - 1) % 6);
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 6; i++) {
      dots.push(
        <div key={i} className="mx-1">
          {activeDotIndex === i ? <GoDotFill /> : <GoDot />}
        </div>
      );
    }
    return dots;
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <Sidebar />
        <div className="h-screen w-3/4">
          <div className="headings mt-3">
            <p className="h-8 w-full text-3xl pl-10 flex items-center underline font-normal">
              BLOGS OF THE DAY
            </p>
            <p className="h-11 w-full text-4xl font-bold pl-10 flex items-center">
              Title of the Blog
            </p>
            <p className="h-6 w-full text-2xl pl-10 flex items-center  ">
              Subtitles for the blog changable for each post
            </p>
          </div>
          <div className="h-fit w-full py-2 grid place-items-center relative">
            <div className="Carousel h-[65vh] w-[95%] flex justify-evenly items-center">
              <div className="left h-full w-24 grid place-items-center absolute top-0 left-0">
                <FaCircleArrowLeft
                  onClick={backward}
                  className="cursor-pointer"
                  size={"5.3em"}
                />
              </div>
              <div className="Carousel h-full w-full rounded-3xl bg-[#D9D9D9] flex justify-center items-center"></div>
              <div className="right h-full w-24 grid place-items-center absolute top-0 right-0">
                <FaCircleArrowRight
                  onClick={forward}
                  className="cursor-pointer"
                  size={"5.3em"}
                />
              </div>
            </div>
            <div className="dots h-5 w-full mt-2 flex justify-center items-center">
              {renderDots()}
            </div>
          </div>

          {/* carousel ends*/}

          <TopProjects />
        </div>
      </div>
    </>
  );
}
