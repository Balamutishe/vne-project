import { categories } from "@/server/data";
import { TCategoriesList } from "@/shared/types/categories";
import { useAppSelector } from "@/store/hooks";
import { clsx } from "clsx";
import { FC } from "react";

export const CategoriesListView = () => {
  const { categoriesMen, categoriesWomen } = categories;
  const categoriesType = useAppSelector(
    (state) => state.headerState.categoriesType,
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
  return (
    <ul>
      {categoriesData.map((category) => (
        <li
          key={category.id}
          className={clsx(
            "flex items-center justify-between" +
              " hover:text-hover hover:border-b-hover cursor-pointer transition-colors last:border-b-0",
          )}
        >
          {category.name} ({category.count})
        </li>
      ))}
    </ul>
  );
};
