import { productDelete } from "@/features/Basket/basketSlice";
import CloseSvg from "@/shared/icons/close.svg";
import { useAppDispatch } from "@/store/hooks";
import { FC } from "react";

export const DeleteFromBasket: FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const handleProductDeleteFromBasket = () => {
    dispatch(productDelete({ type: "deleteProduct", _id: id }));
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
