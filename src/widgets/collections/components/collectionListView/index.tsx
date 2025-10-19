import { toggleDropdownMenuVisible } from "@/widgets/header/components/dropdownMenu/dropdownMenuSlice";
import Link from "next/link";
import { FC } from "react";
import { getDataByCollection } from "@/server/data";
import { TCollection } from "@/shared/types/categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCategoryMain } from "@/widgets/collections/collectionsSlice";
import { clsx } from "clsx";
import ArrowSvg from "../../icons/arrow.svg";

export const CollectionListView: FC<{ variant: "main" | "header" }> = ({
  variant,
}) => {
  const { collectionHeaderType, collectionMainType } = useAppSelector(
    (state) => state.collectionsState,
  );

  const currentCollection = getDataByCollection(
    variant === "header" ? collectionHeaderType : collectionMainType,
  );

  switch (variant) {
    case "header":
      return <CollectionListHeader collectionData={currentCollection} />;
    case "main":
      return <CollectionListMain collectionData={currentCollection} />;
  }
};

const CollectionListMain: FC<{
  collectionData: TCollection;
}> = ({ collectionData }) => {
  const dispatch = useAppDispatch();
  const { collectionMainType } = useAppSelector(
    (state) => state.collectionsState,
  );

  return (
    <ul>
      {collectionData.clothing.map((category) => (
        <li
          onMouseEnter={() => dispatch(toggleCategoryMain(category.slug))}
          key={category.id}
          className={clsx(
            "hover:text-hover hover:border-b-hover cursor-pointer transition-colors last:border-b-0" +
              " border-tertiary border-b-[0.5px]",
          )}
        >
          <Link
            href={`/categories/${collectionMainType}/${category.slug}`}
            className={
              "group flex-center-between p-1 text-lg font-light sm:p-2 sm:text-xl lg:text-2xl xl:p-4" +
              " xl:text-3xl"
            }
          >
            <div>
              {category.name} ({category.count})
            </div>
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

const CollectionListHeader: FC<{
  collectionData: TCollection;
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
        {collectionData.clothing.map((category) => {
          return (
            <li
              key={category.id}
              className={clsx(
                "flex-center-between hover:text-hover hover:border-b-hover cursor-pointer transition-colors" +
                  " pt-1 pb-1 last:border-b-0 lg:pt-0 lg:pb-0",
              )}
              onClick={handleMenuClose}
            >
              <Link
                href={`/categories/${collectionHeaderType}/${category.slug}`}
              >
                {category.name} ({category.count})
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
          {collectionData.accessories.map((category) => {
            return (
              <li
                key={category.id}
                className={clsx(
                  "flex-center-between hover:text-hover hover:border-b-hover cursor-pointer transition-colors" +
                    " pt-1 pb-1 last:border-b-0 lg:pt-0 lg:pb-0",
                )}
                onClick={handleMenuClose}
              >
                <Link
                  href={`/categories/${collectionHeaderType}/${category.slug}`}
                >
                  {category.name} ({category.count})
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
        {collectionData.accessories.map((category) => {
          return (
            <li
              key={category.id}
              className={clsx(
                "flex items-center justify-between" +
                  " hover:text-hover hover:border-b-hover cursor-pointer transition-colors last:border-b-0",
              )}
              onClick={handleMenuClose}
            >
              <Link
                href={`/categories/${collectionHeaderType}/${category.slug}`}
              >
                {category.name} ({category.count})
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
