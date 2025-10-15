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
              "group flex items-center justify-between font-light lg:p-2 lg:text-xl xl:p-4" +
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
      <div className={"container-padding"}>
        <ul>
          {collectionData.clothing.map((category) => {
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
      </div>
      <div className={"border-tertiary border-r-1 border-l-1 px-4 py-2.5"}>
        <ul>
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
      </div>
    </>
  );
};
