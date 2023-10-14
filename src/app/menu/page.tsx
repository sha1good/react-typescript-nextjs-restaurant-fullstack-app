import React from "react";
import Link from "next/link";
import { MenuType } from "@/types/types";
//import { menu } from "@/data";


const getData = async () =>{
       const  res = await fetch("http://localhost:3000/api/categories",{
          cache: "no-store"
       })

     if(!res.ok){
        throw new Error("Something went wrong!")
     }
      return res.json();
}

const MenuPage = async() => {

   const menu:MenuType = await getData();
  return (
    <div className="p4 flex flex-col lg:px-20 xl:px-40 md:flex-row items-center h-[calc(100vh-6rem)] hmd:h-[calc(100vh-9rem)]">
      {menu.map((category) => (
        <Link href={`/menu/${category.slug}`} key={category.id}
         className="w-full h-1/3 bg-cover p-8 md:h-1/2"
         style={{backgroundImage: `url(${category.img})`}}>
          <div  className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button className={`hidden md:block lg:block xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-4 px-8 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
