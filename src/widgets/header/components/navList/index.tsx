"use client";

import { TGender } from "@/shared/types/collections.types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCollectionHeader } from "@/widgets/collections/collectionsSlice";
import { toggleDropdownMenuVisible } from "@/widgets/dropdown/dropdownMenuSlice";
import clsx from "clsx";

export const NavList = () => {
  const dispatch = useAppDispatch();
  const { collectionHeaderType } = useAppSelector(
    (state) => state.collectionsState,
  );

  const navList: { name: string; value: TGender }[] = [
    { name: "ЖЕНЩИНАМ", value: "women" },
    { name: "МУЖЧИНАМ", value: "men" },
    { name: "АКСЕССУАРЫ", value: "unisex" },
  ];

  return (
    <nav>
      <ul className={"flex-center-between lg:gap-6 xl:gap-8"}>
        {navList.map((item) => (
          <li
            key={crypto.randomUUID()}
            onClick={() => {
              dispatch(toggleDropdownMenuVisible(true));
              dispatch(toggleCollectionHeader(item.value));
            }}
            className={
              "hover:text-hover active:text-active w-1/3 transition-colors"
            }
          >
            <button className={"hidden cursor-pointer lg:block"}>
              {item.name}
            </button>
            <button
              className={clsx(
                "border-tertiary w-full border-b-3 py-2 lg:hidden",
                {
                  "border-zinc-950": collectionHeaderType === item.value,
                },
              )}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
