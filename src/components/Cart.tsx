"use client"

import { useCartSore } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const CartIcon = () => {
  const {  totalQuantities } = useCartSore();
  
  useEffect(() =>{
    useCartSore.persist.rehydrate()
}, [])

  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8  md:w-5 md:h-5">
        <Image src="/cart.png" alt="cart" fill />
      </div>
      <span>Cart ({totalQuantities})</span>
    </Link>
  );
};

export default CartIcon;
