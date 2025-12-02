"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { DropdownFooter } from "@/widgets/dropdown/components/dropdownFooter";
import { DropdownHeader } from "@/widgets/dropdown/components/dropdownHeader";
import { toggleDropdownMenuVisible } from "@/widgets/dropdown/dropdownMenuSlice";
import { FC, ReactNode, useRef } from "react";

export const Dropdown: FC<{
  ComponentList: ReactNode;
  ComponentNav: ReactNode;
}> = ({ ComponentList, ComponentNav }) => {
  const dispatch = useAppDispatch();
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );
  const ref = useRef<HTMLElement | null>(null);

  if (!isDropdownMenuVisible) return null;

  const handleToggleVisible = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      dispatch(toggleDropdownMenuVisible(false));
    }
  };

  return (
    <section
      className={
        "absolute top-12 right-0 z-100 h-full w-full last:w-full lg:top-16"
      }
      //@ts-ignore
      onClick={(e) => handleToggleVisible(e)}
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
