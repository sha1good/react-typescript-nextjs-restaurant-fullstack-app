import React from "react";
import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Category = () => {
  return (
    <div className="text-red-500 flex flex-wrap">
      {pizzas.map((pizza) => (
        <Link
          href={`/product/${pizza.id}`}
          key={pizza.id}
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col
     justify-between group even:bg-fuchsia-50"
        >
          {pizza.img && (
            <div className="relative h-[80%]">
              <Image src={pizza.img} alt="" fill className="object-contain" />
            </div>
          )}
          <div className="flex justify-between font-bold">
          <h1 className="uppercase text-xl p-1">
              {pizza.title}
            </h1>
            <h2 className="text-xl p-1 group-hover:hidden">${pizza.price}</h2>
            <button className="uppercase rounded-md text-white bg-red-500 p-1 group-hover:block">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
