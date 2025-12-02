"use client";

import useDropdownVisibilityOnBlur from "@/features/Dropdown/hooks/useDropdownVisibilityOnBlur";
import { useAppSelector } from "@/store/hooks";
import DropdownFooter from "@/widgets/Dropdown/components/DropdownFooter";
import DropdownHeader from "@/widgets/Dropdown/components/DropdownHeader";
import { FC, ReactNode } from "react";

export const Dropdown: FC<{
  ComponentList: ReactNode;
  ComponentNav: ReactNode;
}> = ({ ComponentList, ComponentNav }) => {
  const { ref, handleToggleVisible } = useDropdownVisibilityOnBlur();
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );

  if (!isDropdownMenuVisible) return null;

  return (
    <section
      className={
        "absolute top-12 right-0 z-100 h-full w-full last:w-full lg:top-16"
      }
      // @ts-ignore
      onClick={(e) => handleToggleVisible(e as MouseEvent)}
    >
      <section className={"bg-background hidden h-75 lg:block"} ref={ref}>
        <DropdownHeader />
        <div className={"flex h-63 [&>*]:w-[23%]"}>{ComponentList}</div>
        <div className={"h-63 w-[54%]"}></div>
      </section>
      <section className={"lg:hidden"}>
        <div
          className={
            "border-tertiary bg-background container-padding border-t-1 border-b-1"
          }
        >
          {ComponentNav}
          {ComponentList}
        </div>
        <DropdownFooter />
      </section>
    </section>
  );
};
