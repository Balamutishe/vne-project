"use client";

import { FC } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { getDataByCategory, getDataByFilter, getTopList } from "@/server/data";
import { BreadCrumb } from "@/features/breadCrumb";
import { TGender, TProduct } from "@/shared/types/categories";
import { SectionTitle } from "@/shared/ui/sectionTitle";
import { ProductCard } from "@/widgets/productsList/components/productCard";

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

const ProductsList: FC<{
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
      <section className={"container-margin size-full"}>
        <div className={"container-margin"}>
          <SectionTitle title={title} />
        </div>
        {data.length !== 0 ? (
          <ul
            className={clsx("product-list", {
              "product-list-odd":
                variant === "main" && window.screen.width >= 640,
            })}
          >
            {data.map((product: TProduct) => (
              <li
                key={product.id}
                className={clsx("", {
                  "last:hidden":
                    variant === "main" && window.screen.width <= 640,
                  "last:block":
                    variant === "category" && window.screen.width <= 640,
                })}
              >
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
