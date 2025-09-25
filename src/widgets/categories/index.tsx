"use client";

import { CategoriesListView } from "@/widgets/categories/categoriesListView";
import { CategoriesSwitcher } from "@/widgets/categories/categoriesSwitcher";
import { CategoryPreview } from "@/widgets/categories/categoryPreview";
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
          <CategoriesListView />
        </div>
      </div>
    </section>
  );
};
