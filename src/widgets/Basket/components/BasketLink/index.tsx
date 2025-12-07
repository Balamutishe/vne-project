"use client";

import { toggleBasketOpen } from "@/features/Basket/basketSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import BagSvg from "@/shared/icons/bag.svg";
import Link from "next/link";

const BasketLink = () => {
  const dispatch = useAppDispatch();
  const { totalQuantity, isBasketOpen } = useAppSelector(
    (state) => state.basketState,
  );

  return (
    <div className="relative">
      {totalQuantity > 0 && (
        <span
          className={
            "bg-hover text-background absolute -top-2 -right-3 flex h-3 w-3 items-center sm:-top-3 sm:-right-4" +
            " sm:h-5" +
            " sm:w-5" +
            " justify-center" +
            " rounded-full p-2 text-xs leading-0 sm:text-base"
          }
        >
          {totalQuantity}
        </span>
      )}
      <BagSvg
        className={"hover:[&>path]:fill-hover hidden cursor-pointer sm:block"}
        width={24}
        height={24}
        onClick={() => {
          dispatch(toggleBasketOpen(!isBasketOpen));
        }}
      />
      <Link href={"/basket"} className={"sm:hidden"}>
        <BagSvg
          className={"hover:[&>path]:fill-hover cursor-pointer"}
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

export default BasketLink;
