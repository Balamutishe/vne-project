"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { getDataProductById } from "@/server/data";
import ColorSvg from "./icons/colorImage.svg";
import ArrowDownSvg from "./icons/arrow-down.svg";

export const ProductDetails = () => {
  const { category, subcategory, productId } = useParams<{
    category: "men" | "women" | undefined;
    subcategory: string | undefined;
    productId: string | undefined;
  }>();

  const product = getDataProductById(category, subcategory, productId);

  return (
    <section className={"mb-31 flex justify-between [&>*]:w-1/2"}>
      <div>
        <ul>
          {product &&
            product.imagesUrl.map((imageUrl) => (
              <li key={imageUrl}>
                <Image
                  src={imageUrl}
                  alt={product.name}
                  width={710}
                  height={952}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className={"mb-4 flex min-h-135 flex-col pt-16"}>
        <div
          className={
            "flex justify-between border-t-1 border-b-1 border-[#a7a7a7] px-30 py-4"
          }
        >
          <span>
            {product && product.name ? product.name : "Имя продукта не найдено"}
          </span>
          <span>
            {product && product.price
              ? product.price
              : "Цена продукта не найдена"}
            &#8381;
          </span>
        </div>
        <div className={"mb-16 px-30 py-4"}>
          <ColorSvg width={49} height={49} className={"mb-4"} />
          <div
            className={
              "flex justify-start gap-2 text-sm [&>*]:h-8.5 [&>*]:w-8.5 [&>*]:border-1 [&>*]:border-[#a7a7a7]"
            }
          >
            <button className={"cursor-pointer"}>S</button>
            <button className={"cursor-pointer"}>M</button>
            <button className={"cursor-pointer"}>L</button>
          </div>
        </div>
        <div className={"mb-16"}>
          <ul
            className={
              "first:border-t-1 first:border-[#a7a7a7] [&>*]:border-b-1 [&>*]:border-[#a7a7a7] [&>*]:px-2" +
              " [&>*]:flex [&>*]:justify-between [&>*]:py-2.5"
            }
          >
            <li>
              <span>
                <span className={"pr-14"}>(01)</span>
                <span>ОПИСАНИЕ</span>
              </span>
              <span className={"flex items-center"}>
                <ArrowDownSvg width={13} height={8} />
              </span>
            </li>
            <li>
              <span>
                <span className={"pr-14"}>(02)</span>
                <span>УХОД</span>
              </span>
              <span className={"flex items-center"}>
                <ArrowDownSvg width={13} height={8} />
              </span>
            </li>
            <li>
              <span>
                <span className={"pr-14"}>(03)</span>
                <span>ТАБЛИЦА РАЗМЕРОВ</span>
              </span>
              <span className={"flex items-center"}>
                <ArrowDownSvg width={13} height={8} />
              </span>
            </li>
          </ul>
        </div>
        <div className={"flex items-center justify-center px-30"}>
          <button
            className={
              "bg-hover text-background hover:bg-active min-w-136 cursor-pointer p-4 transition-colors"
            }
          >
            ДОБАВИТЬ В КОРЗИНУ
          </button>
        </div>
      </div>
    </section>
  );
};
