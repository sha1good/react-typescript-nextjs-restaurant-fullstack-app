import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalQuantities: 0,
  totalprice: 0,
};

export const useCartSore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalQuantities: INITIAL_STATE.totalQuantities,
      totalPrice: INITIAL_STATE.totalprice,
      addToCart(item) {
        const products = get().products; ////get all the current products in the bucket
        const productInState = products.find(
          (product) => product.id === item.id
        ); //get the id of the product the customer want to add

        if (productInState) {
          const updatedProducts = products.map((product) =>
            product.id === productInState.id
              ? {
                  ...item,
                  quantity: product.quantity + item.quantity,
                  price: product.price + item.price,
                }
              : item
          );
          set((state) => ({
            products: updatedProducts,
            totalQuantities: state.totalQuantities + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          set((state) => ({
            products: [...state.products, item],
            totalQuantities: state.totalQuantities + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        }
      },
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== item.id),
          totalQuantities: state.totalQuantities - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }));
      },
      clearCart() {
        set({ products: [], totalQuantities: 0, totalPrice: 0 });
      },
    }),
    { name: "cart", skipHydration: true }
  )
);
