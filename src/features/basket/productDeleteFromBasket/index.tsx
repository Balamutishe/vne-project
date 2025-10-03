import { productDelete } from "@/features/basket/basketSlice";
import CloseSvg from "@/features/basket/icons/close.svg";
import { useAppDispatch } from "@/store/hooks";
import { FC } from "react";

export const ProductDeleteFromBasket: FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const handleProductDeleteFromBasket = () => {
    dispatch(productDelete({ id }));
  };

  return (
    <button onClick={handleProductDeleteFromBasket}>
      <CloseSvg
        width={24}
        height={24}
        className={"hover:[&>path]:fill-hover cursor-pointer"}
      />
    </button>
  );
};
