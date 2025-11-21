import { FC } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { TProduct } from "@/shared/types/collections.types";
import { SectionTitle } from "@/shared/ui/sectionTitle";
import { ProductCard } from "@/widgets/productsList/components/productCard";

export const ProductsList: FC<{
  data: TProduct[];
  title: string;
  variant: "main" | "category";
}> = ({ data, title, variant }) => {
  return (
    <section className={"container-margin size-full"}>
      <div className={"container-margin"}>
        <SectionTitle title={title} />
      </div>
      {data.length !== 0 ? (
        <ul
          className={clsx("product-list", {
            "product-list-odd": variant === "main",
          })}
        >
          {data.map((product: TProduct) => (
            <li key={product.id}>
              <Link
                href={`/collections/${product.gender}/${product.category}/${product.id}`}
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
  );
};
