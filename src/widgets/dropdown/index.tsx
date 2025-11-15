"use client";

import { useAppSelector } from "@/store/hooks";
import { DropdownFooter } from "@/widgets/dropdown/components/dropdownFooter";
import { DropdownHeader } from "@/widgets/dropdown/components/dropdownHeader";
import { FC, ReactNode } from "react";

export const Dropdown: FC<{
  ComponentList: ReactNode;
  ComponentNav: ReactNode;
}> = ({ ComponentList, ComponentNav }) => {
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );

  if (!isDropdownMenuVisible) return null;

  return (
    <section
      className={
        "absolute top-12 right-0 z-100 max-h-80 w-full last:w-full lg:top-16"
      }
    >
      <section className={"bg-background hidden lg:block"}>
        <DropdownHeader />
        <div className={"flex h-80 [&>*]:w-[23%]"}>{ComponentList}</div>
        <div className={"w-[54%]"}></div>
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
