"use client";

import { useAppSelector } from "@/store/hooks";
import { DropdownVisibilityChange } from "@/widgets/dropdown/components/dropdownVisibilityChange";

export const DropdownHeader = () => {
  const { collectionHeaderType } = useAppSelector(
    (state) => state.collectionsState,
  );

  return (
    <div
      className={
        "border-tertiary flex h-11.5 items-center border-t-1 border-b-1"
      }
    >
      <span className={"container-padding flex w-[23%] items-center"}>
        {collectionHeaderType !== "unisex" && "ОДЕЖДА"}
      </span>
      <span
        className={
          "border-tertiary flex w-[23%] items-center border-r-1 border-l-1 px-4 py-2.5"
        }
      >
        АКСЕССУАРЫ
      </span>
      <span
        className={"container-padding flex w-[54%] items-center justify-end"}
      >
        <DropdownVisibilityChange />
      </span>
    </div>
  );
};
