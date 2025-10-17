"use client";

import { getDataByCategory, getDataByFilter, getTopList } from "@/server/data";
import { TGender, TProduct } from "@/shared/types/categories";
import { SectionTitle } from "@/shared/ui/sectionTitle";
import { BreadCrumb } from "@/widgets/breadCrumb";
import { clsx } from "clsx";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { FC } from "react";
import Image from "next/image";

export const ProductsListView = () => {
  const { category, subcategory } = useParams<{
    category: TGender;
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

  if (category) {
    const data = getDataByCategory(category, subcategory);

    return (
      <ProductsList
        data={data!.list}
        title={data!.name}
        variant={category ? "category" : "main"}
      />
    );
  }

  const data = getTopList();

  return (
    <ProductsList
      data={data.data}
      title={data!.title}
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
        <div className={"sm:container-margin mb-5"}>
          <BreadCrumb />
        </div>
      )}
      <section className={"container-margin w-full"}>
        <div className={"container-margin"}>
          <SectionTitle title={title} />
        </div>
        {data.length !== 0 ? (
          <ul
            className={clsx("product-list", {
              "product-list-odd":
                variant === "main" && window.screen.width >= 768,
            })}
          >
            {data.map((product: TProduct) => (
              <li
                key={product.id}
                className={clsx("", {
                  "last:hidden":
                    variant === "main" && window.screen.width <= 768,
                  "last:block":
                    variant === "category" && window.screen.width <= 768,
                })}
              >
                <Link
                  href={`/categories/${product.gender}/${product.category}/${product.id}`}
                  className={"size-full"}
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
    <article className={"relative size-full overflow-hidden"}>
      <div
        className={
          "z-[-1] flex size-full flex-col p-2 text-[0.5rem] sm:flex-row sm:justify-between sm:text-base"
        }
      >
        <h3>{title}</h3>
        <span>{price} &#8381;</span>
      </div>
      <Image
        className={"absolute top-2 z-[-2] size-full object-cover"}
        src={previewImgUrl}
        alt={"Product image"}
        width={616}
        height={813}
        priority={true}
      />
    </article>
  );
};
