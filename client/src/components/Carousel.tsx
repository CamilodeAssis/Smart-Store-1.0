import { useState } from "react";

import amd from "../assets/images/carousel/amd.webp";
import nvidia from "../assets/images/carousel/nvidia.jpg";
import placaAmd from "../assets/images/carousel/placaamd.webp";
import placaNvidia from "../assets/images/carousel/placanvidia.jpg";
import memoria from "../assets/images/carousel/memoria.webp";
import mouse from "../assets/images/carousel/mouse.jpg";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const photos = [
  { img: amd },
  { img: nvidia },
  { img: placaAmd },
  { img: placaNvidia },
  { img: memoria },
  { img: mouse },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    const firstPhoto = currentIndex === 0;
    const newIndex = firstPhoto ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const lastPhoto = currentIndex === photos.length - 1;
    const newIndex = lastPhoto ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPhoto = (index: number) => {
      setCurrentIndex(index);
  }

  return (
    <div className=" h-[400px] w-full top-0  relative group">
      <div
        style={{ backgroundImage: `url(${photos[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-500 rounded"
      ></div>
      <div
        onClick={prev}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  bg-orange-500 text-white cursor-pointer "
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        onClick={next}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  bg-orange-500 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={0} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {photos &&
          photos.map((photo, index) => (
            <div key={index} onClick={() => goToPhoto(index)} className="text-2xl cursor-pointer">
              <RxDotFilled size={30} className="text-orange-500"/>
            </div>
          ))}
      </div>
    </div>
  );
};
