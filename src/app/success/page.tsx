"use client";

import { useCartSore } from "@/utils/store";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");
  const { clearCart } = useCartSore();

  console.log(payment_intent);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/confirm-payment/${payment_intent}`,
          {
            method: "PUT",
          }
        );
        if (res.status === 200) {
          setTimeout(() => {
            clearCart();
            router.push("/orders");
          }, 2000);
        }
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [payment_intent, router, clearCart]);

  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
        <p className="max-w-[600px]">
          Payment successful. You are being redirected to the orders page.
          Please do not close the page.
        </p>
        <ConfettiExplosion className="absolute m-auto" />
      </div>
    </>
  );
};

export default SuccessPage;
