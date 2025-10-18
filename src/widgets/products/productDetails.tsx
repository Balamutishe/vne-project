"use client";

import { FC, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { clsx } from "clsx";
import { ProductAddToBasket } from "@/features/basket/productAddToBasket";
import { TProduct } from "@/shared/types/categories";
import { getDataProductById } from "@/server/data";
import { ReactSwiper } from "@/widgets/swiper";
import ColorSvg from "./icons/colorImage.svg";
import ArrowDownSvg from "./icons/arrow-down.svg";

export const ProductDetails = () => {
  const { category, subcategory, productId } = useParams<{
    category: "men" | "women" | "unisex";
    subcategory: string;
    productId: string;
  }>();

  const [size, setSize] = useState("M");

  const product: TProduct | undefined = getDataProductById(
    category,
    subcategory,
    productId,
  );

  if (!product) return <div>Продукт не найден</div>;

  const { description, care, sizeChart, color } = product.details;

  const [currentColor, setCurrentColor] = useState(color[0]);

  return (
    <section
      className={"container-margin sm:flex sm:justify-between sm:[&>*]:w-1/2"}
    >
      <div className={"hidden sm:block"}>
        <ProductDetailsImagesList imagesUrlList={product.imagesUrl} />
      </div>
      <div className={"sm:hidden"}>
        <ReactSwiper imagesUrlList={product.imagesUrl} />
      </div>
      <div className={"flex flex-col pt-16 xl:max-h-135"}>
        <ProductDetailsHeader
          name={product.name}
          price={product.price}
          colors={color}
          currentSize={size}
          setSize={setSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <div className={"container-margin"}>
          <ProductDetailsDescriptionList
            description={description}
            care={care}
            sizeChart={sizeChart}
          />
        </div>
        <div className={"flex items-center justify-center px-4"}>
          <ProductAddToBasket
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={1}
            imageUrl={product.previewImageUrl}
            size={size}
            color={currentColor}
          />
        </div>
      </div>
    </section>
  );
};

const ProductDetailsHeader: FC<{
  name: string;
  price: number;
  colors: string[];
  currentSize: string;
  setSize: (size: string) => void;
  currentColor: string;
  setCurrentColor: (size: string) => void;
}> = ({
  name,
  price,
  colors,
  currentSize,
  setSize,
  setCurrentColor,
  currentColor,
}) => {
  const listSizes = ["XS", "S", "M", "L", "XL"];

  const handleSetSize = (size: string) => setSize(size);
  const handleSetColor = (color: string) => setCurrentColor(color);

  return (
    <div>
      <div
        className={
          "border-tertiary flex justify-between border-t-1 border-b-1 px-6 py-4 text-sm sm:px-30 sm:py-4 sm:text-xl"
        }
      >
        <span>{name}</span>
        <span>{price} &#8381;</span>
      </div>
      <div className={"container-margin px-6 py-4 sm:px-30 sm:py-4"}>
        <div className={"flex gap-2"}>
          {colors.map((color) => (
            <ColorSvg
              key={crypto.randomUUID()}
              width={49}
              height={49}
              className={clsx(`mb-4 cursor-pointer`, {
                "[&>*]:fill-hover": color === "blue",
                "[&>*]:fill-tertiary": color === "gray",
                "[&>*]:fill-violet": color === "violet",
                "[&>*]:fill-white [&>*]:stroke-[#a7a7a7]": color === "white",
                "[&>*]:fill-black": color === "black",
                "scale-110": color === currentColor,
              })}
              onClick={() => handleSetColor(color)}
            />
          ))}
        </div>
        <div className={"flex justify-start gap-2 text-sm"}>
          {listSizes.map((size) => (
            <button
              key={crypto.randomUUID()}
              className={clsx(
                "hover:text-background hover:bg-hover border-tertiary h-8.5 w-8.5 cursor-pointer border-1",
                { "text-background bg-hover": size === currentSize },
              )}
              onClick={() => handleSetSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductDetailsDescriptionList: FC<{
  description: string;
  care: string;
  sizeChart: {
    sizeShared: string;
    sizeRussian: number;
    sizeBreast: number;
    sizeWaist: number;
    sizeHips: number;
  }[];
}> = ({ description, care, sizeChart }) => {
  const listDescriptionProduct: {
    abbreviation: string;
    title: string;
    data:
      | string
      | {
          sizeShared: string;
          sizeRussian: number;
          sizeBreast: number;
          sizeWaist: number;
          sizeHips: number;
        }[];
  }[] = [
    {
      abbreviation: "description",
      title: "ОПИСАНИЕ",
      data: description,
    },
    {
      abbreviation: "care",
      title: "УХОД",
      data: care,
    },
    {
      abbreviation: "sizeChart",
      title: "ТАБЛИЦА РАЗМЕРОВ",
      data: sizeChart,
    },
  ];

  return (
    <ul className={"border-tertiary last:border-b-1"}>
      {listDescriptionProduct.map((item, index) => (
        <li key={index}>
          <ProductDetailsDescriptionItem item={item} index={index} />
        </li>
      ))}
    </ul>
  );
};

const ProductDetailsDescriptionItem: FC<{
  item: {
    abbreviation: string;
    title: string;
    data:
      | string
      | {
          sizeShared: string;
          sizeRussian: number;
          sizeBreast: number;
          sizeWaist: number;
          sizeHips: number;
        }[];
  };
  index: number;
}> = ({ item, index }) => {
  const [visibleAdditional, setVisibleAdditional] = useState<boolean>(false);
  const handleSetVisibleAdditional = () => {
    setVisibleAdditional((prev) => !prev);
  };

  const listSizeChartHeader = ["РАЗМЕР", "РОССИЯ", "ГРУДЬ", "ТАЛИЯ", "БЕДРА"];

  return (
    <article>
      <div
        className={clsx(
          "hover:text-hover group flex cursor-pointer justify-between border-t-1 border-[#a7a7a7] px-2 py-2.5",
          { "border-b-1": visibleAdditional },
        )}
        onClick={handleSetVisibleAdditional}
      >
        <span>
          <span className={"pr-14"}>(0{index + 1})</span>
          <span>{item.title}</span>
        </span>
        <span className={"flex items-center"}>
          <ArrowDownSvg
            width={13}
            height={8}
            className={clsx(
              "group-hover:[&>path]:stroke-hover rotate-0 transition-transform",
              {
                "rotate-180": visibleAdditional,
              },
            )}
          />
        </span>
      </div>
      {visibleAdditional && (
        <div className={"px-2 py-2 sm:pt-4 sm:pb-4 sm:pl-50"}>
          {!Array.isArray(item.data) && <p>{item.data}</p>}
          {Array.isArray(item.data) && (
            <ul className={"flex flex-col justify-between"}>
              <li className={"flex justify-between"} key={crypto.randomUUID()}>
                {listSizeChartHeader.map((item) => (
                  <span
                    key={crypto.randomUUID()}
                    className={"flex w-1/5 items-center justify-center"}
                  >
                    {item}
                  </span>
                ))}
              </li>
              {item.data.map((deepItem) => (
                <li
                  key={crypto.randomUUID()}
                  className={"flex justify-between"}
                >
                  {Object.entries(deepItem).map(([_, value]) => (
                    <span
                      className={"flex w-1/5 items-center justify-center"}
                      key={crypto.randomUUID()}
                    >
                      {value}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
};

const ProductDetailsImagesList: FC<{ imagesUrlList: string[] }> = ({
  imagesUrlList,
}) => {
  return (
    <ul>
      {imagesUrlList.map((imageUrl) => (
        <li key={imageUrl}>
          <Image src={imageUrl} alt={imageUrl} width={710} height={952} />
        </li>
      ))}
    </ul>
  );
};
