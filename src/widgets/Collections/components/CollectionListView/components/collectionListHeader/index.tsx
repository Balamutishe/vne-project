"use client";

import { toggleDropdownMenuVisible } from "@/features/Dropdown/dropdownMenuSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clsx } from "clsx";
import Link from "next/link";
import { FC } from "react";

export const CollectionListHeader: FC<{
  collectionData: {
    group: string;
    slug: string;
    name: string;
  }[];
}> = ({ collectionData }) => {
  const { collectionHeaderType } = useAppSelector(
    (state) => state.collectionsState,
  );
  const dispatch = useAppDispatch();

  const handleMenuClose = () => {
    dispatch(toggleDropdownMenuVisible(false));
  };

  return (
    <>
      <ul
        className={clsx(
          "flex flex-col items-start justify-between px-2 py-4 lg:block lg:px-13.5 lg:py-2.5",
        )}
      >
        {collectionData
          .filter((category) => category.group === "clothing")
          .map((category) => {
            return (
              <li
                key={crypto.randomUUID()}
                className={clsx(
                  "flex-center-between hover:text-hover hover:border-b-hover cursor-pointer transition-colors" +
                    " pt-1 pb-1 last:border-b-0 lg:pt-0 lg:pb-0",
                )}
                onClick={handleMenuClose}
              >
                <Link
                  href={`/collections/${collectionHeaderType}/${category.slug}`}
                >
                  {category.name}
                </Link>
              </li>
            );
          })}
        <div
          className={clsx("", {
            "block lg:hidden": collectionHeaderType === "unisex",
            hidden:
              collectionHeaderType === "men" ||
              collectionHeaderType === "women",
          })}
        >
          {collectionData
            .filter((category) => category.group === "accessories")
            .map((category) => {
              return (
                <li
                  key={crypto.randomUUID()}
                  className={clsx(
                    "flex-center-between hover:text-hover hover:border-b-hover cursor-pointer transition-colors" +
                      " pt-1 pb-1 last:border-b-0 lg:pt-0 lg:pb-0",
                  )}
                  onClick={handleMenuClose}
                >
                  <Link
                    href={`/collections/${collectionHeaderType}/${category.slug}`}
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
        </div>
      </ul>
      <ul
        className={
          "border-tertiary hidden border-r-1 border-l-1 px-4 py-2.5 lg:block"
        }
      >
        {collectionData
          .filter((category) => category.group === "accessories")
          .map((category) => {
            return (
              <li
                key={crypto.randomUUID()}
                className={clsx(
                  "flex items-center justify-between" +
                    " hover:text-hover hover:border-b-hover cursor-pointer transition-colors last:border-b-0",
                )}
                onClick={handleMenuClose}
              >
                <Link
                  href={`/collections/${collectionHeaderType}/${category.slug}`}
                >
                  {category.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
