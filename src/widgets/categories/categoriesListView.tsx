import { FC } from "react";
import { categories } from "@/server/data";
import { TCategoriesList } from "@/shared/types/categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCategoryCurrent } from "@/widgets/categories/categoriesSlice";
import { clsx } from "clsx";
import ArrowSvg from "./icons/arrow.svg";

export const CategoriesListView = () => {
  const { categoriesMen, categoriesWomen } = categories;
  const categoriesType = useAppSelector(
    (state) => state.categoriesState.categoriesType,
  );

  switch (categoriesType) {
    case "men":
      return <CategoriesList categoriesData={categoriesMen} />;
    case "women":
      return <CategoriesList categoriesData={categoriesWomen} />;
  }
};

const CategoriesList: FC<{
  categoriesData: TCategoriesList;
}> = ({ categoriesData }) => {
  const dispatch = useAppDispatch();

  return (
    <ul>
      {categoriesData.map((category) => (
        <li
          onMouseEnter={() => dispatch(setCategoryCurrent(category.slug))}
          key={category.id}
          className={clsx(
            "group flex items-center justify-between" +
              " hover:text-hover hover:border-b-hover cursor-pointer transition-colors last:border-b-0" +
              " border-b-[0.5px] border-zinc-950 px-4 py-4 text-3xl font-light",
          )}
        >
          <div>
            {category.name} ({category.count})
          </div>
          <ArrowSvg
            className={"group-hover:[&>path]:fill-hover"}
            width={48}
            height={8}
          />
        </li>
      ))}
    </ul>
  );
};
