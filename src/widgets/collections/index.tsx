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
      <div className={"container-margin flex-center-between flex-wrap"}>
        <SectionTitle title={"КАТЕГОРИИ"} />
        <CollectionSwitcher />
      </div>
      <div
        className={
          "border-tertiary flex-center-between h-full gap-2 border-t-1 border-b-1 py-2"
        }
      >
        <div className={"hidden w-1/3 sm:block"}>
          <CollectionPreview />
        </div>
        <div className={"w-full sm:w-2/3"}>
          <CollectionListView variant={"main"} />
        </div>
      </div>
    </section>
  );
};
