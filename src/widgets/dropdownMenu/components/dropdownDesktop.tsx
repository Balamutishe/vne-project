"use client";

import { useAppSelector } from "@/store/hooks";
import { DropdownMenuClose } from "@/widgets/dropdownMenu/components/dropdownMenuClose";
import { FC, ReactNode } from "react";

export const DropdownDesktop: FC<{ Component: ReactNode }> = ({
  Component,
}) => {
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );

  if (!isDropdownMenuVisible) return null;

  return (
    <section className={"bg-background hidden lg:block"}>
      <DropdownHeader />
      <div className={"flex h-80 [&>*]:w-[23%]"}>{Component}</div>
      <div className={"w-[54%]"}></div>
    </section>
  );
};

const DropdownHeader = () => {
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
        <DropdownMenuClose />
      </span>
    </div>
  );
};
