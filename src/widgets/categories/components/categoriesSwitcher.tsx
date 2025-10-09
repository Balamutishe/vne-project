import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCategoryCurrent,
  setCategoryType,
} from "@/widgets/categories/categoriesSlice";
import { clsx } from "clsx";

export const CategoriesSwitcher = () => {
  const { categoriesType } = useAppSelector((state) => state.categoriesState);
  const dispatch = useAppDispatch();

  return (
    <div className={"flex items-center gap-5"}>
      <button
        className={clsx(
          "cursor-pointer border-b-1 border-zinc-950 px-9.5 py-1.5 transition-colors",
          {
            "border-b-hover text-hover": categoriesType === "women",
          },
        )}
        onClick={() => {
          dispatch(setCategoryType("women"));
          dispatch(setCategoryCurrent("trousers"));
        }}
      >
        Женское
      </button>
      <button
        className={clsx(
          "cursor-pointer border-b-1 border-zinc-950 px-9.5 py-1.5 transition-colors",
          {
            "border-b-hover text-hover": categoriesType === "men",
          },
        )}
        onClick={() => {
          dispatch(setCategoryType("men"));
          dispatch(setCategoryCurrent("trousers"));
        }}
      >
        Мужское
      </button>
    </div>
  );
};
