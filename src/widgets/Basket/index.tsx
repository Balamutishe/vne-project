"use client";

import { useAppSelector } from "@/store/hooks";
import BasketDesktop from "./components/BasketDesktop";
import BasketMobile from "./components/BasketMobile";

const BasketView = () => {
  const { isBasketOpen } = useAppSelector((state) => state.basketState);

  return (
    <>
      {isBasketOpen && (
        <section
          className={
            "bg-background absolute top-12 right-0 z-100 hidden sm:top-16 sm:block"
          }
        >
          <div className={"hidden sm:block"}>
            <BasketDesktop />
          </div>
          <div className={"sm:hidden"}>
            <BasketMobile />
          </div>
        </section>
      )}
    </>
  );
};

export default BasketView;
