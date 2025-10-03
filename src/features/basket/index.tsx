import { BasketClear } from "@/features/basket/basketClear";
import {
  productAdd,
  productDelete,
  toggleBasketOpen,
} from "@/features/basket/basketSlice";
import { ProductDeleteFromBasket } from "@/features/basket/productDeleteFromBasket";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useEffect, useRef } from "react";
import MinusSvg from "./icons/minus.svg";
import PlusSvg from "./icons/plus.svg";

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

  const { products, totalPrice } = useAppSelector((state) => state.basketState);

  return (
    <div ref={ref} className={"w-98 px-5 py-8"}>
      <div className={"mb-4 flex items-center justify-between"}>
        <h3>КОРЗИНА</h3>
        <BasketClear />
      </div>
      <div>
        <ul className={"mb-5 flex flex-col gap-10"}>
          {products.length !== 0 ? (
            products.map((product) => (
              <li
                key={crypto.randomUUID()}
                className={"flex min-h-36 items-center justify-between"}
              >
                <article
                  className={"flex w-full items-center justify-between gap-1"}
                >
                  <div className={"w-1/3"}>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={107}
                      height={141}
                    />
                  </div>
                  <div className={"w-2/3"}>
                    <div className={"flex justify-between"}>
                      <h4 className={"text-base"}>{product.name}</h4>
                      <ProductDeleteFromBasket id={product.id} />
                    </div>
                    <div>Color</div>
                    <div className={"flex items-center justify-between"}>
                      <div
                        className={"flex items-center justify-between gap-1"}
                      >
                        <button
                          className={"text-3xl"}
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
                                  id: product.id,
                                  quantity: 1,
                                  price: 9900,
                                }),
                              )
                            }
                          />
                        </button>
                        <span>( {product.quantity} )</span>
                        <button
                          className={"text-3xl"}
                          onClick={() =>
                            dispatch(
                              productAdd({
                                ...product,
                                price: 9900,
                                quantity: 1,
                              }),
                            )
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
                      <div>{product.price}</div>
                    </div>
                  </div>
                </article>
              </li>
            ))
          ) : (
            <li>Корзина пуста</li>
          )}
        </ul>
        <div>
          <div className={"mb-2 flex items-center justify-between"}>
            <span>ВСЕГО</span>
            <span>{totalPrice}</span>
          </div>
          <div className={"flex items-center justify-between"}>
            <button
              className={
                "bg-hover text-background active:bg-active w-full cursor-pointer p-4 transition-colors"
              }
            >
              ОФОРМИТЬ ЗАКАЗ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
