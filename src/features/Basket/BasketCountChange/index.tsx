"use client";

import { useAppDispatch } from "@/store/hooks";
import {
  BasketProduct,
  productAdd,
  productDelete,
} from "@/features/Basket/basketSlice";
import MinusSvg from "@/shared/icons/minus.svg";
import PlusSvg from "@/shared/icons/plus.svg";

const BasketCountChange = ({ product }: { product: BasketProduct }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={"flex-center-between"}>
      <div className={"flex-center-between gap-1"}>
        <button disabled={product.quantity === 1}>
          <MinusSvg
            width={24}
            height={24}
            className={"hover:[&>path]:stroke-hover cursor-pointer"}
            onClick={() =>
              dispatch(
                productDelete({
                  type: "decreaseQuantity",
                  _id: product._id,
                }),
              )
            }
          />
        </button>
        <span className={"text-hover"}>( {product.quantity} )</span>
        <button
          onClick={() => dispatch(productAdd({ ...product, quantity: 1 }))}
        >
          <PlusSvg
            width={24}
            height={24}
            className={"hover:[&>path]:stroke-hover cursor-pointer"}
          />
        </button>
      </div>
      <div>{product.price * product.quantity} &#8381;</div>
    </div>
  );
};

export default BasketCountChange;
