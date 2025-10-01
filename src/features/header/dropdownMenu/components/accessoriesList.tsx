import { toggleDropdownMenuVisible } from "@/features/header/dropdownMenu/dropdownMenuSlice";
import { getDataByCategory } from "@/server/data";
import { TProduct } from "@/shared/types/categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clsx } from "clsx";
import Link from "next/link";
import { FC } from "react";

export const AccessoriesListView = () => {
  const { categoriesType } = useAppSelector((state) => state.dropdownMenuState);
  const data = getDataByCategory(categoriesType, "accessories")!.list;

  return <AccessoriesList accessoriesList={data} />;
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
      {accessoriesList ? (
        accessoriesList.map((accessory) => (
          <li
            key={accessory.id}
            className={clsx(
              "hover:text-hover hover:border-b-hover flex cursor-pointer items-center justify-between" +
                " transition-colors last:border-b-0",
            )}
            onClick={handleMenuClose}
          >
            <Link
              href={`/categories/${categoriesType}/${accessory.category}/${accessory.id}`}
            >
              {accessory.name}
            </Link>
          </li>
        ))
      ) : (
        <div>Список не найден</div>
      )}
    </ul>
  );
};
