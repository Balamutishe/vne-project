import { FC } from "react";
import { useAppDispatch } from "@/store/hooks";
import { productAdd } from "@/features/basket/basketSlice";

export const ProductAddToBasket: FC<{
  id: string;
  name: string;
  price: number;
  quantity: number;
}> = ({ id, name, price, quantity }) => {
  const dispatch = useAppDispatch();
  const handleProductAddToBasket = () => {
    dispatch(
      productAdd({
        id,
        name,
        price,
        quantity,
      }),
    );
  };

  return (
    <button
      className={
        "bg-hover text-background active:bg-active min-w-136 cursor-pointer p-4 transition-colors"
      }
      onClick={handleProductAddToBasket}
    >
      ДОБАВИТЬ В КОРЗИНУ
    </button>
  );
};
