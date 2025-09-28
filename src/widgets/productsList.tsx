import { categories } from "@/server/data";
import { FC } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const damionFont = localFont({
  src: "../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

export const ProductsList = () => {
  const galleryList = categories.galleryList;

  return (
    <section className={"mb-20 w-full"}>
      <h2 className={`${damionFont.className} mb-20 text-7xl`}>
        СТИЛЬ ВНЕ ВРЕМЕНИ
      </h2>
      <ul className={"product-list product-list-odd"}>
        {galleryList.map((product) => (
          <li key={product.id}>
            <ProductCard
              title={product.name}
              price={product.price}
              previewImgUrl={product.previewImageUrl}
            />
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
      <div className={"flex items-center justify-between p-2"}>
        <h3>{title}</h3>
        <span>{price} &#8381;</span>
      </div>
      <Image
        className={"absolute top-0 z-[-1] w-full"}
        src={previewImgUrl}
        alt={"Product image"}
        width={616}
        height={813}
        priority={true}
      />
    </article>
  );
};
