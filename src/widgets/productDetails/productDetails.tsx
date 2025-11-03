"use client";

import { FC, useState } from "react";
import { ReactSwiper } from "@/widgets/swiper";
import { ProductAddToBasket } from "@/features/basket/addToBasket";
import { TProduct } from "@/lib/mongoRepository/actions";
import {
  ProductDetailsHeader,
  ProductDetailsImagesList,
  ProductDetailsDescription,
} from "@/widgets/productDetails/components";

export const ProductDetails: FC<{ product: TProduct | undefined }> = ({
  product,
}) => {
  const [size, setSize] = useState("M");

  if (!product) return <div>Product not founded</div>;

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
          <ProductDetailsDescription
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
