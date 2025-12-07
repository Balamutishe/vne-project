import BasketCountChange from "@/features/Basket/BasketCountChange";
import { BasketProduct } from "@/features/Basket/basketSlice";
import { DeleteFromBasket } from "@/features/Basket/DeleteFromBasket";
import Image from "next/image";

const BasketCard = ({ product }: { product: BasketProduct }) => {
  return (
    <article
      className={
        "flex-center-between size-full gap-4 text-[0.65rem] sm:text-base lg:text-lg"
      }
    >
      <div className={"border-tertiary h-full w-1/3 border-1"}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={107}
          height={141}
          className={"size-full object-contain"}
        />
      </div>
      <div className={"w-2/3"}>
        <div className={"flex-center-between"}>
          <h4>{product.name}</h4>
          <DeleteFromBasket id={product._id} />
        </div>
        <div>
          {product.color} / {product.size}
        </div>
        <BasketCountChange product={product} />
      </div>
    </article>
  );
};

export default BasketCard;
