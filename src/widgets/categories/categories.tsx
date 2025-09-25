"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCategoryCurrent,
  setCategoryMainType,
} from "@/widgets/categories/categoriesSlice";
import { clsx } from "clsx";
import Image from "next/image";
import { FC } from "react";
import { categories } from "@/server/data";
import { TCategoriesList } from "@/shared/types/categories";
import localFont from "next/font/local";

const damionFont = localFont({
  src: "../../../public/fonts/DaMiOne-Regular.ttf",
  display: "swap",
});

export const CategoriesSection = () => {
  return (
    <section className={"mb-20 min-h-198 w-full"}>
      <div className={"mb-18 flex items-center justify-between"}>
        <h2 className={`${damionFont.className} text-7xl`}>КАТЕГОРИИ</h2>
        <CategoriesSwitcher />
      </div>
      <div
        className={
          "flex items-start justify-between gap-2 border-t-1 border-b-1 border-zinc-950 py-2"
        }
      >
        <div className={"w-1/3"}>
          <CategoryPreview />
        </div>
        <div className={"w-2/3"}>
          <CategoriesListView listType={"main"} />
        </div>
      </div>
    </section>
  );
};

export const CategoryPreview = () => {
  const { categoryCurrent, categoriesMainType } = useAppSelector(
    (state) => state.categoriesState,
  );

  return (
    <Image
      src={`/images/category/${categoriesMainType}-${categoryCurrent}.jpg`}
      alt={"PreviewCategory"}
      width={431}
      height={628}
    />
  );
};

export const CategoriesSwitcher = () => {
  const categoryType = useAppSelector(
    (state) => state.categoriesState.categoriesMainType,
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
        onClick={() => dispatch(setCategoryMainType("women"))}
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
        onClick={() => dispatch(setCategoryMainType("men"))}
      >
        Мужское
      </button>
    </div>
  );
};

export const CategoriesListView: FC<{
  listType: "header" | "main";
}> = ({ listType }) => {
  const { categoriesMen, categoriesWomen } = categories;
  const categoriesMainType = useAppSelector(
    (state) => state.categoriesState.categoriesMainType,
  );
  const categoriesHeaderType = useAppSelector(
    (state) => state.categoriesState.categoriesHeaderType,
  );

  const categoriesType =
    listType === "header" ? categoriesHeaderType : categoriesMainType;

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
  const dispatch = useAppDispatch();

  return (
    <ul>
      {categoriesData.map((category) => (
        <li
          onMouseEnter={() => dispatch(setCategoryCurrent(category.slug))}
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

export const AccessoriesListView = () => {
  const { categoriesMen, categoriesWomen, accessoriesListAll } = categories;

  const categoriesHeaderType = useAppSelector(
    (state) => state.categoriesState.categoriesHeaderType,
  );

  const accessoriesMen = categoriesMen.find(
    (category) => category.name === "Аксессуары",
  );
  const accessoriesWomen = categoriesWomen.find(
    (category) => category.name === "Аксессуары",
  );

  switch (categoriesHeaderType) {
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
