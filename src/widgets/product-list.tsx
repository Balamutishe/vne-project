import { FC } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const damionFont = localFont({
  src: "../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

export const ProductList = () => {
  return (
    <section className={"mb-20 w-full"}>
      <h2 className={`${damionFont.className} mb-20 text-7xl`}>
        СТИЛЬ ВНЕ ВРЕМЕНИ
      </h2>
      <ul className={"product-list"}>
        <li>
          <ProductCard title={"БОМБЕР ОВЕРСАЙЗ"} price={"9900"} />
        </li>
        <li>
          <ProductCard title={"БОМБЕР ОВЕРСАЙЗ"} price={"9900"} />
        </li>
        <li>
          <ProductCard title={"БОМБЕР ОВЕРСАЙЗ"} price={"9900"} />
        </li>
        <li>
          <ProductCard title={"БОМБЕР ОВЕРСАЙЗ"} price={"9900"} />
        </li>
        <li>
          <ProductCard title={"БОМБЕР ОВЕРСАЙЗ"} price={"9900"} />
        </li>
        <li>
          <ProductCard title={"БОМБЕР ОВЕРСАЙЗ"} price={"9900"} />
        </li>
      </ul>
    </section>
  );
};

export const ProductCard: FC<{ title: string; price: string }> = ({
  title,
  price,
}) => {
  return (
    <article className={"relative h-203 overflow-hidden p-2"}>
      <div className={"flex items-center justify-between"}>
        <h3>{title}</h3>
        <span>{price} &#8381;</span>
      </div>
      <Image
        className={"absolute top-0 z-[-1] w-full"}
        src={"/images/product-image.png"}
        alt={"Product image"}
        width={616}
        height={813}
        priority={true}
      />
    </article>
  );
};
