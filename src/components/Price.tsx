"use client";
import { ProductType } from "@/types/types";
import { useCartSore } from "@/utils/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// type Props = {
//   price: number;
//   id: string;
//   options?: { title: string; additionalPrice: number }[];
// };
const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    // setTotal(
    //   quantity * (product.options?.length ? product.price + product.options[selected].additionalPrice : product.price)
    // );

    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);

  const { addToCart } = useCartSore();

 useEffect(() =>{
      useCartSore.persist.rehydrate()
 }, [])

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("The product added to the cart!");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">${total}</h2>
      <div className="flex gap-4">
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              key={option.title}
              className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
              style={{
                background: selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex justify-between w-full p-2 ring-1 ring-red-500">
          <span>Qunatity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        <button
          className="uppercase w-56 ring-1 bg-red-500 p-2 text-white"
          onClick={handleCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
