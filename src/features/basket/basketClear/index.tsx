import { basketClear } from "@/features/Basket/basketSlice";
import { useAppDispatch } from "@/store/hooks";

export const BasketClear = () => {
  const dispatch = useAppDispatch();

  const handleBasketClear = () => {
    dispatch(basketClear());
  };

  return (
    <button
      className={
        "hover:text-hover cursor-pointer text-xs transition-colors sm:text-sm lg:text-base"
      }
      onClick={handleBasketClear}
    >
      ОЧИСТИТЬ
    </button>
  );
};
