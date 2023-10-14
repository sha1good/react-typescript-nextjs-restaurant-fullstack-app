import Price from "@/components/Price";
//import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";
import { ProductType } from "@/types/types";
import DeleteBotton from "@/components/DeleteBotton";


const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

if (!res.ok) {
    throw new Error("Failed!");
}
return res.json();
};

const SingleProduct = async ({ params }:{params: {id: string}}) => {

  const singleProduct: ProductType = await getData(params.id)
  console.log( "This is the response ", singleProduct)
  return (
    <div
      className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500
    md:flex-row md:items-start gap-8 relative"
    >
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      )}

      <div className="h-1/2 flex flex-col gap-4 md:justify-center  md:gap-6 xl:gap-8">
        <h1 className="text-3xl uppercase font-bold xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          product={singleProduct}
        />
      </div>
      <DeleteBotton id={singleProduct.id}/>
    </div>
  );
};

export default SingleProduct;
