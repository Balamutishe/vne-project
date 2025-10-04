import { FC } from "react";
import { useAppDispatch } from "@/store/hooks";
import { productAdd } from "@/features/basket/basketSlice";

export const ProductAddToBasket: FC<{
  id: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  imageUrl: string;
}> = ({ id, name, price, color, size, quantity, imageUrl }) => {
  const dispatch = useAppDispatch();
  const handleProductAddToBasket = () => {
    dispatch(
      productAdd({
        id,
        name,
        price,
        quantity,
        imageUrl,
        color,
        size,
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
