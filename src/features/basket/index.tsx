import { useEffect, useRef } from "react";
import { BasketClear } from "@/features/basket/basketClear";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  productAdd,
  productDelete,
  toggleBasketOpen,
} from "@/features/basket/basketSlice";
import { ProductDeleteFromBasket } from "@/features/basket/productDeleteFromBasket";
import { clsx } from "clsx";
import MinusSvg from "./icons/minus.svg";
import PlusSvg from "./icons/plus.svg";

export const Basket = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement | null>(null);
  const { totalPrice } = useAppSelector((state) => state.basketState);

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
    <div
      ref={ref}
      className={clsx(
        "max-h-180 w-80 px-2.5 py-4 lg:max-h-199 lg:w-98 lg:px-5 lg:py-8",
      )}
    >
      <div className={"flex-center-between mb-1 lg:mb-4"}>
        <h3>КОРЗИНА</h3>
        <BasketClear />
      </div>
      <div>
        <div className={"mb-3 lg:mb-5"}>
          <BasketList />
        </div>
        <div className={"flex-center-between"}>
          {totalPrice !== 0 ? (
            <Link
              href={"/payment"}
              onClick={() => dispatch(toggleBasketOpen(false))}
              className={
                "bg-hover text-background active:bg-active w-full cursor-pointer p-2 transition-colors lg:p-4"
              }
            >
              ОФОРМИТЬ ЗАКАЗ
            </Link>
          ) : (
            <button
              disabled={true}
              className={
                "bg-hover text-background active:bg-active w-full cursor-pointer p-2 transition-colors lg:p-4"
              }
            >
              <Link
                href={"/payment"}
                onClick={() => dispatch(toggleBasketOpen(false))}
                className={
                  "bg-hover text-background active:bg-active w-full cursor-pointer p-2 transition-colors lg:p-4"
                }
              >
                ОФОРМИТЬ ЗАКАЗ
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const BasketList = () => {
  const dispatch = useAppDispatch();
  const { products, totalPrice } = useAppSelector((state) => state.basketState);

  return (
    <>
      <ul
        className={
          "mb-2 flex max-h-96 flex-col gap-6 overflow-auto lg:mb-5 lg:max-h-135"
        }
      >
        {products.length !== 0 ? (
          products.map((product) => (
            <li
              key={crypto.randomUUID()}
              className={"flex-center-between h-27 lg:h-36"}
            >
              <article className={"flex-center-between size-full gap-4"}>
                <div className={"border-tertiary h-full w-1/3 border-1"}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={107}
                    height={141}
                    className={"object-content size-full"}
                  />
                </div>
                <div className={"w-2/3"}>
                  <div className={"flex-center-between"}>
                    <h4 className={"text-sm lg:text-base"}>{product.name}</h4>
                    <ProductDeleteFromBasket id={product._id} />
                  </div>
                  <div>
                    {product.color} / {product.size}
                  </div>
                  <div className={"flex-center-between"}>
                    <div className={"flex-center-between gap-1"}>
                      <button
                        className={"text-xl lg:text-3xl"}
                        disabled={product.quantity === 1}
                      >
                        <MinusSvg
                          width={24}
                          height={24}
                          className={
                            "hover:[&>path]:stroke-hover cursor-pointer"
                          }
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
                      <span className={"text-hover"}>
                        ( {product.quantity} )
                      </span>
                      <button
                        className={"text-xl lg:text-3xl"}
                        onClick={() =>
                          dispatch(productAdd({ ...product, quantity: 1 }))
                        }
                      >
                        <PlusSvg
                          width={24}
                          height={24}
                          className={
                            "hover:[&>path]:stroke-hover cursor-pointer"
                          }
                        />
                      </button>
                    </div>
                    <div>{product.price * product.quantity} &#8381;</div>
                  </div>
                </div>
              </article>
            </li>
          ))
        ) : (
          <li>Корзина пуста</li>
        )}
      </ul>
      <div className={"flex-center-between"}>
        <span>ВСЕГО</span>
        <span>{totalPrice} &#8381;</span>
      </div>
    </>
  );
};
