import Image from "next/image";

const Cart = () => {
  return (
    <div className="flex flex-col text-red-500 lg:flex-row md:h-[calc(100vh-9rem)] lg:h-[calc(100vh-9rem)]">
      {/* Product Container*/}
      <div className="p-4 h-1/2 flex flex-col justify-center overflow-y-auto lg:h-full lg:w-2/3 lg:px-20 xl:px-40">
        {/* Single Item Container*/}
        <div className="flex items-center justify-between mb-10 h-full">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold text-xl">$79.90</h2>
          <span className="font-bold cursor-pointer">X</span>
        </div>
        {/* Single Item Container*/}
        <div className="flex items-center justify-between mb-10 h-full">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold text-xl">$79.90</h2>
          <span className="font-bold cursor-pointer">X</span>
        </div>
        {/* Single Item Container*/}
        <div className="flex items-center justify-between mb-10 h-full">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold text-xl">$79.90</h2>
          <span className="font-bold cursor-pointer">X</span>
        </div>
        {/* Single Item Container*/}
        <div className="flex items-center justify-between mb-10 h-full">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold text-xl">$79.90</h2>
          <span className="font-bold cursor-pointer">X</span>
        </div>
        {/* Single Item Container*/}
        <div className="flex items-center justify-between mb-10 h-full">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold text-xl">$79.90</h2>
          <span className="font-bold cursor-pointer">X</span>
        </div>
      </div>
      {/* Payment Container*/}
      <div className="p-4 h-1/2 flex flex-col gap-4 bg-fuchsia-50 lg:h-full lg:w-1/3 lg:px-20 justify-center xl:px-40 2xl:w-1/2 2xl:text-xl ">
        <div className="flex items-center justify-between">
          <span className="font-bold">Subtotal (3 items)</span>
          <span className="font-bold">$81.70</span>
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
          <span>$81.70</span>
        </div>
        <button className="self-end bg-red-500 text-white rounded-md p-2 w-1/2">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
