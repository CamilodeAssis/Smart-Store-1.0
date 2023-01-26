import React, { useState, useEffect, useRef } from "react";

import amd from "../assets/images/carousel/amd.webp";
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
  { img: placaNvidia },
  { img: memoria },
  { img: mouse },
];



let count = 0;
let slideInterval: number;

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<any>();


  const startSlider = () => {
    slideInterval = setInterval(() => {
      next();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const listener = document.getElementById("listener");


  useEffect(() => {
    listener?.addEventListener("mouseenter",pauseSlider )
  
    startSlider();
  }, [slideInterval]);

  const prev = () => {
    const photosLength = photos.length;
    count = (currentIndex + photosLength - 1) % photosLength;
    setCurrentIndex(count);
  };

  const next = () => {
    count = (count + 1) % photos.length;
    setCurrentIndex(count);
  };

  return (
    <div  className=" h-[400px] w-full top-0  relative group">
      <div
        id="listener"
        style={{ backgroundImage: `url(${photos[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-500 "
      >
      </div>
      <div
        onClick={ prev}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  bg-orange-500 text-white cursor-pointer "
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        
        onClick={ next}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  bg-orange-500 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={0} />
      </div>
      <div className="p-2 bg-orange-500 w-full"></div>
    </div>
  );
};
