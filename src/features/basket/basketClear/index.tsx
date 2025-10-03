import { basketClear } from "@/features/basket/basketSlice";
import { useAppDispatch } from "@/store/hooks";

export const BasketClear = () => {
  const dispatch = useAppDispatch();

  const handleBasketClear = () => {
    dispatch(basketClear());
  };

  return (
    <button
      className={
        "hover:text-hover cursor-pointer p-4 text-sm transition-colors"
      }
      onClick={handleBasketClear}
    >
      ОЧИСТИТЬ
    </button>
  );
};
