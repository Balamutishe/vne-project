"use client";

import { useAppSelector } from "@/store/hooks";
import { DropdownDesktop } from "@/widgets/dropdownMenu/components/dropdownDesktop";

export const DropdownMenuView = () => {
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );

  if (!isDropdownMenuVisible) return null;

  return (
    <section
      className={
        "absolute top-12 right-0 z-100 max-h-80 w-full last:w-full sm:top-16"
      }
    >
      <DropdownDesktop />
    </section>
  );
};
