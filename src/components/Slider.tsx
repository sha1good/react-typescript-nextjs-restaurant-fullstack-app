"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-1 flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER*/}
      <div className="flex flex-1 items-center justify-center flex-col gap-8 font-bold text-red-500 py-4">
        <h1 className="uppercase p-4 text-5xl md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlider].title}
        </h1>
        <button className="bg-red-500 text-white px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER*/}
      <div className="flex-1 relative w-full">
        <Image
          src={data[currentSlider].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
