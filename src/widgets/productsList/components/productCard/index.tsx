import Image from "next/image";
import { FC } from "react";

export const ProductCard: FC<{
  title: string;
  price: number;
  previewImgUrl: string;
}> = ({ title, price, previewImgUrl }) => {
  return (
    <article className={"relative size-full overflow-hidden"}>
      <div
        className={
          "z-[-1] flex size-full flex-col p-2 text-[0.5rem] sm:flex-row sm:justify-between sm:text-lg"
        }
      >
        <h3>{title}</h3>
        <span>{price} &#8381;</span>
      </div>
      <Image
        className={"absolute top-4 z-[-2] object-cover"}
        src={previewImgUrl}
        alt={"Product image"}
        width={616}
        height={813}
      />
    </article>
  );
};
