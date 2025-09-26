import { categories } from "@/server/data";
import { useAppSelector } from "@/store/hooks";
import { clsx } from "clsx";
import { FC } from "react";

export const AccessoriesListView = () => {
  const { categoriesMen, categoriesWomen, accessoriesListAll } = categories;

  const categoriesType = useAppSelector(
    (state) => state.headerState.categoriesType,
  );

  const accessoriesMen = categoriesMen.find(
    (category) => category.name === "Аксессуары",
  );
  const accessoriesWomen = categoriesWomen.find(
    (category) => category.name === "Аксессуары",
  );

  switch (categoriesType) {
    case "accessories":
      return <AccessoriesList accessoriesList={accessoriesListAll!} />;
    case "men":
      return <AccessoriesList accessoriesList={accessoriesMen!.list} />;
    case "women":
      return <AccessoriesList accessoriesList={accessoriesWomen!.list} />;
  }
};

export const AccessoriesList: FC<{
  accessoriesList: {
    id: string;
    name: string;
  }[];
}> = ({ accessoriesList }) => {
  return (
    <ul>
      {accessoriesList.map((accessory) => (
        <li
          key={accessory.id}
          className={clsx(
            "hover:text-hover hover:border-b-hover flex cursor-pointer items-center justify-between" +
              " transition-colors last:border-b-0",
          )}
        >
          {accessory.name}
        </li>
      ))}
    </ul>
  );
};
