"use client"
import React from "react";
import Image from "next/image";
import CountDown from "./CountDown";
const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row  md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/*Text Container */}
      <div className="flex flex-1 flex-col text-white justify-center items-center gap-8 p-6">
        <h1 className="font-bold text-5xl xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 rounded-md text-white py-4 px-8">
          Order Now
        </button>
      </div>
      {/* Image Container*/}
      <div className="relative flex-1 w-full md:h-full">
        <Image
          src="/offerProduct.png"
          alt="offerProduct"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
