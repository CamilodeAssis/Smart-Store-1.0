import React, { useState, useEffect, useRef } from "react";

import amd from "../assets/images/carousel/amd.jpg";
import nvidia from "../assets/images/carousel/nvidia.jpg";
import placaAmd from "../assets/images/carousel/placaamd.webp";
import placaNvidia from "../assets/images/carousel/placanvidia.jpg";
import memoria from "../assets/images/carousel/memoria.webp";
import mouse from "../assets/images/carousel/mouse.jpg";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

const photos = [
  { img: amd },
  { img: nvidia },
  { img: placaAmd },
  { img: placaNvidia },
  { img: memoria },
  { img: mouse },
];

let count = 0;
let slideInterval: number;

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("load", startSlider);
    sliderRef.current?.addEventListener("mouseover", pauseSlider);
    sliderRef.current?.addEventListener("mouseleave", startSlider);
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      next();
    }, 4000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const next = () => {
    count = (count + 1) % photos.length;
    setCurrentIndex(count);
  };

  const prev = () => {
    const photosLength = photos.length;
    count = (currentIndex + photosLength - 1) % photosLength;
    setCurrentIndex(count);
  };

 

  return (
    <div
      ref={sliderRef}
      className="w-full h-[140px] sm:h-[220px] md:h-[260px] lg:h-[380px] xl:h-[420px] select-none relative group"
    >
      <div
        style={{ backgroundImage: `url(${photos[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      <div className="absolute w-full  top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center  text-white ">
        <button
          onClick={prev}
          className="rounded-full bg-orange-500 w-5 h-5 sm:w-10 sm:h-10 hidden group-hover:block "
        >
          <BsChevronCompactLeft className="w-5 h-5 sm:w-10 sm:h-10 " />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-orange-500 w-5 h-5 sm:w-10 sm:h-10  hidden group-hover:block"
        >
          <BsChevronCompactRight className="w-5 h-5 sm:w-10 sm:h-10"  />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {photos.map((_, index) => (
            <div
              key={index}
              className={`transition-all w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full ${
                currentIndex === index ? "p-2 sm:p-3" : "bg-opacity-50"
              } `}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
