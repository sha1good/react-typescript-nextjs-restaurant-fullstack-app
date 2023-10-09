"use client";
import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./Cart";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500  p-4 flex items-center justify-between border-b-2 border-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* lEFT lINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="text-xl font-bold flex-1 md:text-center">
        <Link href={"/"}>Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      {/*RIGHT LINK */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 rounded-md px-1">
          <Image src="/phone.png" alt="phone" width={20} height={20} />
          <span> 289 780 9320</span>
        </div>
        {!user ? <Link href="/login">Login</Link> : <Link href="/order">Order</Link>}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
