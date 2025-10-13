"use client";

import { SectionTitle } from "@/shared/ui/sectionTitle";
import { CategoriesListView } from "@/widgets/categories/components/categoriesListView";
import { CategoriesSwitcher } from "@/widgets/categories/components/categoriesSwitcher";
import { CategoryPreview } from "@/widgets/categories/components/categoryPreview";

export const CategoriesSection = () => {
  return (
    <section className={"w-full lg:mb-10 lg:max-h-168 xl:mb-20 xl:max-h-198"}>
      <div className={"flex items-center justify-between lg:mb-5 xl:mb-10"}>
        <SectionTitle title={"КАТЕГОРИИ"} />
        <CategoriesSwitcher />
      </div>
      <div
        className={
          "border-tertiary flex items-center justify-between gap-2 border-t-1 border-b-1 py-2"
        }
      >
        <div className={"h-full w-1/3"}>
          <CategoryPreview />
        </div>
        <div className={"w-2/3"}>
          <CategoriesListView />
        </div>
      </div>
    </section>
  );
};
