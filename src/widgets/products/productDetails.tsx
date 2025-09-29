"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { categories } from "@/server/data";

export const ProductDetails = () => {
  const { category, subcategory, productId } = useParams();

  const handleSwitchCategoryData = () => {
    switch (category) {
      case "men":
        return "men";
      case "women":
        return "women";
      case "accessories":
        return "accessoriesAll";
      default:
        return "galleryList";
    }
  };

  const product = categories[handleSwitchCategoryData()]
    .find(({ slug }) => slug === subcategory)!
    .list.find(({ id }) => id === productId);

  return (
    <section className={"flex justify-between gap-2"}>
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
      <div>
        <div className={"mb-4 border-t-1 border-b-1 border-zinc-950"}>
          <span>
            {product && product.name ? product.name : "Имя продукта не найдено"}
          </span>
          <span>
            {product && product.price
              ? product.price
              : "Цена продукта не найдена"}
          </span>
        </div>
      </div>
    </section>
  );
};
