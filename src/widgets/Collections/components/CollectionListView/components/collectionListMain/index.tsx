"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCategoryMain } from "@/widgets/Collections/collectionsSlice";
import ArrowSvg from "@/widgets/Collections/icons/arrow.svg";
import { clsx } from "clsx";
import Link from "next/link";
import { FC } from "react";

export const CollectionListMain: FC<{
  collectionData: {
    group: string;
    slug: string;
    name: string;
  }[];
}> = ({ collectionData }) => {
  const dispatch = useAppDispatch();
  const { collectionMainType } = useAppSelector(
    (state) => state.collectionsState,
  );

  return (
    <ul>
      {collectionData
        .filter((category) => category.group === "clothing")
        .map((category) => (
          <li
            onMouseEnter={() => dispatch(toggleCategoryMain(category.slug))}
            key={crypto.randomUUID()}
            className={clsx(
              "hover:text-hover hover:border-b-hover cursor-pointer transition-colors last:border-b-0" +
                " border-tertiary border-b-[0.5px]",
            )}
          >
            <Link
              href={`/collections/${collectionMainType}/${category.slug}`}
              className={
                "group flex-center-between p-1 text-lg font-light sm:p-2 sm:text-xl lg:text-2xl xl:p-4" +
                " xl:text-3xl"
              }
            >
              <div>{category.name}</div>
              <ArrowSvg
                className={"group-hover:[&>path]:fill-hover"}
                width={48}
                height={8}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};
