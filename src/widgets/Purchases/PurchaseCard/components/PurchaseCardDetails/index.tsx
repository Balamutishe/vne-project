import Image from "next/image";
import { FC } from "react";

const PurchaseCardDetails: FC<{
  item: {
    _id: string;
    id: string;
    name: string;
    price: number;
    size: string;
    color: string;
    quantity: number;
    imageUrl: string;
  };
}> = ({ item }) => {
  return (
    <div
      className={
        "flex h-14 w-full items-center justify-between gap-2.5 text-[0.62rem] sm:justify-end sm:gap-10 sm:pr-20" +
        " sm:text-xs lg:text-base"
      }
    >
      <div className={"border-tertiary border-1 p-1 sm:border-0 sm:p-0"}>
        <Image
          src={item.imageUrl}
          alt={"Product preview"}
          width={33}
          height={41}
        />
      </div>
      <div>Цвет/{item.color}</div>
      <div>Размер/{item.size}</div>
      <div>Количество/{item.quantity} шт.</div>
      <div>Цена/{item.price * item.quantity} &#8381;</div>
    </div>
  );
};

export default PurchaseCardDetails;