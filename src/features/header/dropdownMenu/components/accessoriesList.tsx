import { toggleDropdownMenuVisible } from "@/features/header/dropdownMenu/dropdownMenuSlice";
import { categories } from "@/server/data";
import { TProduct } from "@/shared/types/categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clsx } from "clsx";
import Link from "next/link";
import { FC } from "react";

export const AccessoriesListView = () => {
  const { men, women, accessoriesAll } = categories;

  const { categoriesType } = useAppSelector((state) => state.dropdownMenuState);

  const accessoriesMen = men.find((category) => category.name === "Аксессуары");
  const accessoriesWomen = women.find(
    (category) => category.name === "Аксессуары",
  );

  switch (categoriesType) {
    case "accessories":
      return <AccessoriesList accessoriesList={accessoriesAll![0].list} />;
    case "men":
      return <AccessoriesList accessoriesList={accessoriesMen!.list} />;
    case "women":
      return <AccessoriesList accessoriesList={accessoriesWomen!.list} />;
  }
};

export const AccessoriesList: FC<{
  accessoriesList: TProduct[];
}> = ({ accessoriesList }) => {
  const { categoriesType } = useAppSelector((state) => state.dropdownMenuState);
  const dispatch = useAppDispatch();

  const handleMenuClose = () => {
    dispatch(toggleDropdownMenuVisible(false));
  };

  return (
    <ul>
      {accessoriesList.map((accessory) => (
        <li
          key={accessory.id}
          className={clsx(
            "hover:text-hover hover:border-b-hover flex cursor-pointer items-center justify-between" +
              " transition-colors last:border-b-0",
          )}
          onClick={handleMenuClose}
        >
          <Link
            href={`/categories/${categoriesType}/accessories/${accessory.id}`}
          >
            {accessory.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
