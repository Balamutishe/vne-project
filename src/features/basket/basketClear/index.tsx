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
        "hover:text-hover cursor-pointer text-[0.55rem] transition-colors sm:text-sm lg:text-base"
      }
      onClick={handleBasketClear}
    >
      ОЧИСТИТЬ
    </button>
  );
};
