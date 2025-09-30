"use client";

import { getDataByCategory, getTopList } from "@/server/data";
import { TProduct } from "@/shared/types/categories";
import { clsx } from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const damionFont = localFont({
  src: "../../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

export const ProductsListView = () => {
  const { category, subcategory } = useParams<{
    category: "men" | "women";
    subcategory: string;
  }>();

  const data = category
    ? getDataByCategory(category, subcategory)
    : getTopList();

  return (
    <ProductsList
      data={data!.list}
      title={data!.name}
      variant={category ? "category" : "main"}
    />
  );
};

export const ProductsList: FC<{
  data: TProduct[];
  title: string;
  variant: "main" | "category";
}> = ({ data, title, variant }) => {
  return (
    <section className={"mb-20 w-full"}>
      <h2 className={`${damionFont.className} mb-20 text-7xl`}>{title}</h2>
      <ul
        className={clsx("product-list", {
          "product-list-odd": variant === "main",
        })}
      >
        {data.map((product: TProduct) => (
          <li key={product.id}>
            <Link
              href={`/categories/${product.gender}/${product.category}/${product.id}`}
            >
              <ProductCard
                title={product.name}
                price={product.price}
                previewImgUrl={product.previewImageUrl}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const ProductCard: FC<{
  title: string;
  price: number;
  previewImgUrl: string;
}> = ({ title, price, previewImgUrl }) => {
  return (
    <article className={"relative h-full overflow-hidden"}>
      <div className={"z-[-1] flex items-center justify-between p-2"}>
        <h3>{title}</h3>
        <span>{price} &#8381;</span>
      </div>
      <Image
        className={"absolute top-0 z-[-2] w-full"}
        src={previewImgUrl}
        alt={"Product image"}
        width={616}
        height={813}
        priority={true}
      />
    </article>
  );
};
