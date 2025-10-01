import { FC } from "react";
import Link from "next/link";
import { toggleDropdownMenuVisible } from "@/features/header/dropdownMenu/dropdownMenuSlice";
import { getDataByCollection } from "@/server/data";
import { TCategoriesList } from "@/shared/types/categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clsx } from "clsx";

export const CategoriesListView = () => {
  const { categoriesType } = useAppSelector((state) => state.dropdownMenuState);
  const data = getDataByCollection(categoriesType);

  return (
    <>
      {categoriesType !== "accessories" && (
        <CategoriesList categoriesData={data} />
      )}
    </>
  );
};

const CategoriesList: FC<{
  categoriesData: TCategoriesList;
}> = ({ categoriesData }) => {
  const { categoriesType } = useAppSelector((state) => state.dropdownMenuState);
  const dispatch = useAppDispatch();

  const handleMenuClose = () => {
    dispatch(toggleDropdownMenuVisible(false));
  };

  return (
    <ul>
      {categoriesData.map((category) => {
        if (category.name !== "Аксессуары") {
          return (
            <li
              key={category.id}
              className={clsx(
                "flex items-center justify-between" +
                  " hover:text-hover hover:border-b-hover cursor-pointer transition-colors last:border-b-0",
              )}
              onClick={handleMenuClose}
            >
              <Link href={`/categories/${categoriesType}/${category.slug}`}>
                {category.name} ({category.count})
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};
