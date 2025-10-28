"use client";

import { FC, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clsx } from "clsx";
import { BasketClear } from "@/features/basket/basketClear";
import {
  BasketProduct,
  productAdd,
  productDelete,
  toggleBasketOpen,
} from "@/features/basket/basketSlice";
import { ProductDeleteFromBasket } from "@/features/basket/productDeleteFromBasket";
import MinusSvg from "./icons/minus.svg";
import PlusSvg from "./icons/plus.svg";

export const BasketView = () => {
  return (
    <>
      <div className={"hidden sm:block"}>
        <Basket />
      </div>
      <div className={"sm:hidden"}>
        <BasketMobile />
      </div>
    </>
  );
};

export const Basket = () => {
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
      <div className={"flex-center-between mb-3 sm:mb-5"}>
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

export const BasketList = () => {
  const { products } = useAppSelector((state) => state.basketState);

  return (
    <ul
      className={
        "flex flex-col gap-2 overflow-auto sm:mb-5 sm:max-h-135 sm:gap-6"
      }
    >
      {products.length !== 0 ? (
        products.map((product) => (
          <li
            key={crypto.randomUUID()}
            className={"flex-center-between h-30 sm:h-35 lg:h-40"}
          >
            <BasketCard product={product} />
          </li>
        ))
      ) : (
        <li>Корзина пуста</li>
      )}
    </ul>
  );
};

const BasketCard: FC<{ product: BasketProduct }> = ({ product }) => {
  return (
    <article
      className={
        "flex-center-between size-full gap-4 text-[0.65rem] sm:text-base lg:text-lg"
      }
    >
      <div className={"border-tertiary h-full w-1/3 border-1"}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={107}
          height={141}
          className={"size-full object-cover"}
        />
      </div>
      <div className={"w-2/3"}>
        <div className={"flex-center-between"}>
          <h4>{product.name}</h4>
          <ProductDeleteFromBasket id={product._id} />
        </div>
        <div>
          {product.color} / {product.size}
        </div>
        <BasketCountChange product={product} />
      </div>
    </article>
  );
};

const BasketHeader = () => {
  return (
    <div className={"flex-center-between w-full"}>
      <h3>КОРЗИНА</h3>
      <BasketClear />
    </div>
  );
};

const BasketFooter = () => {
  const dispatch = useAppDispatch();

  const { totalPrice } = useAppSelector((state) => state.basketState);

  return (
    <section className={"w-full"}>
      <div
        className={
          "flex-center-between mb-2 text-[0.65rem] sm:text-base lg:text-lg"
        }
      >
        <span>ВСЕГО</span>
        <span>{totalPrice} &#8381;</span>
      </div>
      <div className={"flex-center-between"}>
        {totalPrice !== 0 ? (
          <Link
            href={"/payment"}
            onClick={() => dispatch(toggleBasketOpen(false))}
            className={
              "bg-hover text-background active:bg-active w-full cursor-pointer p-2 text-center transition-colors lg:p-4"
            }
          >
            ОФОРМИТЬ ЗАКАЗ
          </Link>
        ) : (
          <button
            disabled={true}
            className={
              "bg-hover text-background active:bg-active w-full cursor-pointer p-2 text-center transition-colors lg:p-4"
            }
          >
            ОФОРМИТЬ ЗАКАЗ
          </button>
        )}
      </div>
    </section>
  );
};

const BasketCountChange: FC<{ product: BasketProduct }> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={"flex-center-between"}>
      <div className={"flex-center-between gap-1"}>
        <button disabled={product.quantity === 1}>
          <MinusSvg
            width={24}
            height={24}
            className={"hover:[&>path]:stroke-hover cursor-pointer"}
            onClick={() =>
              dispatch(
                productDelete({
                  type: "decreaseQuantity",
                  _id: product._id,
                }),
              )
            }
          />
        </button>
        <span className={"text-hover"}>( {product.quantity} )</span>
        <button
          onClick={() => dispatch(productAdd({ ...product, quantity: 1 }))}
        >
          <PlusSvg
            width={24}
            height={24}
            className={"hover:[&>path]:stroke-hover cursor-pointer"}
          />
        </button>
      </div>
      <div>{product.price * product.quantity} &#8381;</div>
    </div>
  );
};

const BasketMobile = () => {
  return (
    <section className={"container-margin flex flex-col gap-4 text-xs"}>
      <BasketHeader />
      <BasketList />
      <BasketFooter />
    </section>
  );
};
