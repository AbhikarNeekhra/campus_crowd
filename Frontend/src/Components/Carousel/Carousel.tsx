import React, { useState } from "react";
import "./Carousel.css";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Carousel = () => {
  const [post, setPost] = useState();
  const [currentSlide, setCurrentSlide] = useState(5);

  const getPost = async () => {
    try {
      const response = await fetch("http://localhost:6969/api/post/getPost/1", {
        method: "GET",
      });
      const data = await response.json();
      alert(JSON.stringify(data));
      setPost(data.postTitle);
    } catch (error) {
      alert(error);
    }
  };

  const images = [
    "java.png",
    "python.png",
    "react.png",
    "817060a3-2506-426d-ad9a-0f2b8c8385b3-cover.png",
    "internship-concept-vector-id1134680074.jpg",
    "Irvine.image4_.png",
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div>
        <div className="head-1 text-4xl px-6 py-1 font-semibold">
          Blogs of the Day
        </div>
        <div className="h-[67vh] w-full mx-auto flex justify-evenly items-center relative">
          <div className="title absolute top-0 text-5xl px-6 py-2 font-bold text-center">
            @CareerCrossroads Internships
          </div>
          <div
            onClick={handlePrev}
            className="left h-16 w-16 rounded-full grid place-items-center shadow-abhi4 bg-[rgba(255,255,255,0.4)] absolute top-[43%] left-3 hover:scale-105 transition-all ease-in-out delay-75 cursor-pointer hover:shadow-abhi2"
          >
            <FaAnglesLeft size={"2rem"} />
          </div>
          <div
            onClick={handleNext}
            className="right h-16 w-16 rounded-full grid place-items-center shadow-abhi4 bg-[rgba(255,255,255,0.4)] absolute top-[43%] right-3 hover:scale-105 transition-all ease-in-out delay-75 cursor-pointer hover:shadow-abhi2"
          >
            <FaAnglesRight size={"2rem"} />
          </div>
          <div className="h-[37vh] w-[22vw] bg-blue-200 grid place-items-center mr-48 shadow-abhi4">
            <img className="h-full w-full" src={images[currentSlide]} />
          </div>
          <div className="h-[45vh] w-[37vw] bg-blue-200 grid place-items-center rounded-sm shadow-abhi2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img
              className="h-full aspect-video rounded-sm"
              src={images[currentSlide + 1]}
              alt="an img"
            />
          </div>
          <div className="h-[37vh] w-[22vw] bg-blue-200 grid place-items-center ml-48 shadow-abhi4">
            <img className="h-full w-full" src={images[currentSlide + 2]} />
          </div>
          <div className="subtitle absolute bottom-1 text-3xl px-6 py-2 font-bold text-center">
            Paid Internship Opportunity Available For Freshers
          </div>
        </div>
        <div className="flex justify-center mb-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full mx-1 ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Carousel;
