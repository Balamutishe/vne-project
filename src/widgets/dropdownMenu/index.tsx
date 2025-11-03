import { CollectionListView } from "@/widgets/collections/components";
import {
  DropdownDesktop,
  DropdownMobile,
} from "@/widgets/dropdownMenu/components";

export const DropdownMenuView = async () => {
  return (
    <section
      className={
        "absolute top-12 right-0 z-100 max-h-80 w-full last:w-full lg:top-16"
      }
    >
      <DropdownDesktop Component={<CollectionListView variant={"header"} />} />
      <DropdownMobile />
    </section>
  );
};
