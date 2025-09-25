import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCategoryType } from "@/widgets/categories/categoriesSlice";
import { clsx } from "clsx";

export const CategoriesSwitcher = () => {
  const categoryType = useAppSelector(
    (state) => state.categoriesState.categoriesType,
  );
  const dispatch = useAppDispatch();

  return (
    <div className={"flex items-center gap-5"}>
      <button
        className={clsx(
          "cursor-pointer border-b-1 border-zinc-950 px-9.5 py-1.5 transition-colors",
          {
            "border-b-hover text-hover": categoryType === "women",
          },
        )}
        onClick={() => dispatch(setCategoryType("women"))}
      >
        Женское
      </button>
      <button
        className={clsx(
          "cursor-pointer border-b-1 border-zinc-950 px-9.5 py-1.5 transition-colors",
          {
            "border-b-hover text-hover": categoryType === "men",
          },
        )}
        onClick={() => dispatch(setCategoryType("men"))}
      >
        Мужское
      </button>
    </div>
  );
};
