import { SectionTitle } from "@/shared/ui/sectionTitle";
import {
  CollectionListView,
  CollectionPreview,
  CollectionSwitcher,
} from "@/widgets/Collections/components";

export const CollectionsSection = () => {
  return (
    <section className={"container-margin container-padding w-full"}>
      <div
        className={
          "container-margin flex flex-col lg:flex-row lg:items-center lg:justify-between"
        }
      >
        <div className={"container-margin lg:m-0"}>
          <SectionTitle title={"КАТЕГОРИИ"} />
        </div>
        <div className={"flex items-center justify-center"}>
          <CollectionSwitcher />
        </div>
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
