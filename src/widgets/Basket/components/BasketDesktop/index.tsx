"use client";

import { BasketClear } from "@/features/Basket/BasketClear";
import { toggleBasketOpen } from "@/features/Basket/basketSlice";
import { useAppDispatch } from "@/store/hooks";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import BasketList from "../BasketList";
import BasketFooter from "../BasketFooter";

const BasketDesktop = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      dispatch(toggleBasketOpen(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={clsx(
        "bg-background max-h-180 w-60 px-2.5 py-4 text-[0.65rem] sm:w-80 sm:text-base lg:max-h-199 lg:w-98 lg:px-5 lg:py-8 lg:text-lg",
      )}
    >
      <div className={"flex-center-between mb-3 w-full sm:mb-5"}>
        <h3>КОРЗИНА</h3>
        <BasketClear />
      </div>
      <div className={"mb-3 sm:mb-5"}>
        <BasketList />
      </div>
      <BasketFooter />
    </section>
  );
};

export default BasketDesktop;
