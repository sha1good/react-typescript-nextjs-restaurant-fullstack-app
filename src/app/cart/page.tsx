"use client"; // This is because we are using useCartstore() hook defined in our store

import { useCartSore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Cart = () => {
  const { products, totalQuantities, totalPrice, removeFromCart } =
    useCartSore();

  useEffect(() => {
    useCartSore.persist.rehydrate();
  }, []);

  const { data: session } = useSession();
  const router = useRouter();

  const handleOrderCheckout = async () => {
    //use userSessaion to check whether the user is logged in or not
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch(`http://localhost:3000/api/orders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not-paid!",
            userEmail: session.user.email,
          }),
        });
         if(res.status === 201){
          const data = await res.json();
          
          router.push(`/pay/${data.id}`);
         }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col text-red-500 lg:flex-row md:h-[calc(100vh-9rem)] lg:h-[calc(100vh-9rem)]">
      {/* Product Container*/}
      <div className="p-4 h-1/2 flex flex-col justify-center overflow-y-auto lg:h-full lg:w-2/3 lg:px-20 xl:px-40">
        {/* Single Item Container*/}
        {products.map((item) => (
          <div
            className="flex items-center justify-between mb-10 h-full"
            key={item.id}
          >
            {item.img && (
              <Image src="/temporary/p1.png" alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase font-bold">
                {item.title} x{item.quantity}
              </h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold text-xl">${item.price}</h2>
            <span
              className="font-bold cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/* Payment Container*/}
      <div className="p-4 h-1/2 flex flex-col gap-4 bg-fuchsia-50 lg:h-full lg:w-1/3 lg:px-20 justify-center xl:px-40 2xl:w-1/2 2xl:text-xl ">
        <div className="flex items-center justify-between">
          <span className="font-bold">Subtotal ({totalQuantities} items)</span>
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between ">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <span>TOTAL(INCL. VAT)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button
          className="self-end bg-red-500 text-white rounded-md p-2 w-1/2"
          onClick={handleOrderCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
