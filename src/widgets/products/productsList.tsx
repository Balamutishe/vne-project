"use client";

import { getDataByCategory, getDataByFilter, getTopList } from "@/server/data";
import { TProduct } from "@/shared/types/categories";
import { BreadCrumb } from "@/widgets/breadCrumb";
import { clsx } from "clsx";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { FC } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const damionFont = localFont({
  src: "../../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

export const ProductsListView = () => {
  const { category, subcategory } = useParams<{
    category: "men" | "women" | "accessories";
    subcategory: string;
  }>();
  const searchParams = useSearchParams();

  if (searchParams.get("productName")) {
    const { data, title } =
      !category && !subcategory
        ? getDataByFilter(searchParams.get("productName") || "")
        : getDataByFilter(
            searchParams.get("productName") || "",
            category,
            subcategory,
          );

    return <ProductsList data={data} title={title} variant={"category"} />;
  }

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
    <>
      {variant !== "main" && (
        <div className={"mb-10"}>
          <BreadCrumb />
        </div>
      )}
      <section className={"mb-20 w-full"}>
        <h2 className={`${damionFont.className} mb-10 text-7xl`}>{title}</h2>
        {data.length !== 0 ? (
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
        ) : (
          <p>ПО ВАШЕМУ ЗАПРОСУ НИЧЕГО НЕ НАЙДЕНО</p>
        )}
      </section>
    </>
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
