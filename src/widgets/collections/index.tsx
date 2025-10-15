"use client";

import { SectionTitle } from "@/shared/ui/sectionTitle";
import {
  CollectionListView,
  CollectionPreview,
  CollectionSwitcher,
} from "@/widgets/collections/components";

export const CollectionsSection = () => {
  return (
    <section className={"container-margin w-full"}>
      <div className={"flex items-center justify-between lg:mb-5 xl:mb-10"}>
        <SectionTitle title={"КАТЕГОРИИ"} />
        <CollectionSwitcher />
      </div>
      <div
        className={
          "border-tertiary flex h-full items-center justify-between gap-2 border-t-1 border-b-1 py-2"
        }
      >
        <div className={"w-1/3"}>
          <CollectionPreview />
        </div>
        <div className={"w-2/3"}>
          <CollectionListView variant={"main"} />
        </div>
      </div>
    </section>
  );
};
