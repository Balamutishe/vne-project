"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { FC, useState } from "react";
import { categories } from "@/server/data";
import { TCategoriesList } from "@/shared/types/categories";
import localFont from "next/font/local";

const damionFont = localFont({
  src: "../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

export const CategoriesMain = () => {
  const [categoryType, setCategoryType] = useState<"men" | "women">("women");

  return (
    <section className={"mb-20 min-h-198 w-full"}>
      <div className={"mb-18 flex items-center justify-between"}>
        <h2 className={`${damionFont.className} text-7xl`}>КАТЕГОРИИ</h2>
        <CategoriesSwitcher
          categoryType={categoryType}
          setCategoryType={setCategoryType}
        />
      </div>
      <div
        className={
          "flex items-start justify-between gap-2 border-t-1 border-b-1 border-zinc-950 py-2"
        }
      >
        <div className={"w-1/3"}>
          <Image
            src={"/images/category-women.png"}
            alt={"PreviewCategory"}
            width={431}
            height={628}
          />
        </div>
        <div className={"w-2/3"}>
          <CategoriesListView categoriesType={categoryType} listType={"main"} />
        </div>
      </div>
    </section>
  );
};

export const CategoriesSwitcher: FC<{
  categoryType: string;
  setCategoryType: (value: "men" | "women") => void;
}> = ({ categoryType, setCategoryType }) => {
  return (
    <div className={"flex items-center gap-5"}>
      <button
        className={clsx(
          "cursor-pointer border-b-1 border-zinc-950 px-9.5 py-1.5 transition-colors",
          {
            "border-b-hover text-hover": categoryType === "women",
          },
        )}
        onClick={() => setCategoryType("women")}
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
        onClick={() => setCategoryType("men")}
      >
        Мужское
      </button>
    </div>
  );
};

export const CategoriesListView: FC<{
  categoriesType: "men" | "women" | "accessories";
  listType: "header" | "main";
}> = ({ categoriesType, listType }) => {
  const { categoriesMen, categoriesWomen } = categories;

  switch (categoriesType) {
    case "men":
      return (
        <CategoriesList categoriesData={categoriesMen} listType={listType} />
      );
    case "women":
      return (
        <CategoriesList categoriesData={categoriesWomen} listType={listType} />
      );
  }
};

export const CategoriesList: FC<{
  categoriesData: TCategoriesList;
  listType: "header" | "main";
}> = ({ categoriesData, listType }) => {
  return (
    <ul>
      {categoriesData.map((category) => (
        <li
          key={category.id}
          className={clsx(
            "flex items-center justify-between" +
              " hover:text-hover hover:border-b-hover cursor-pointer transition-colors last:border-b-0",
            {
              "border-b-[0.5px] border-zinc-950 px-4 py-4 text-3xl font-light":
                listType === "main",
            },
          )}
        >
          <div>
            {category.name} ({category.count})
          </div>
          {listType === "main" && (
            <Image
              src={"/images/arrow.svg"}
              alt={"ArrowImg"}
              width={48}
              height={8}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export const AccessoriesListView: FC<{
  accessoriesType: "accessoriesMen" | "accessoriesWomen" | "accessoriesAll";
}> = ({ accessoriesType }) => {
  const { categoriesMen, categoriesWomen, accessoriesListAll } = categories;
  const accessoriesMen = categoriesMen.find(
    (category) => category.name === "Аксессуары",
  );
  const accessoriesWomen = categoriesWomen.find(
    (category) => category.name === "Аксессуары",
  );

  switch (accessoriesType) {
    case "accessoriesAll":
      return <AccessoriesList accessoriesList={accessoriesListAll!} />;
    case "accessoriesMen":
      return <AccessoriesList accessoriesList={accessoriesMen!.list} />;
    case "accessoriesWomen":
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
