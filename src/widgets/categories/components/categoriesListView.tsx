import Link from "next/link";
import { FC } from "react";
import { getDataByCollection } from "@/server/data";
import { TCategoriesList } from "@/shared/types/categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCategoryCurrent } from "@/widgets/categories/categoriesSlice";
import { clsx } from "clsx";
import ArrowSvg from "../icons/arrow.svg";

export const CategoriesListView = () => {
  const categoriesType = useAppSelector(
    (state) => state.categoriesState.categoriesType,
  );

  const data = getDataByCollection(categoriesType);

  return <CategoriesList categoriesData={data} />;
};

const CategoriesList: FC<{
  categoriesData: TCategoriesList;
}> = ({ categoriesData }) => {
  const dispatch = useAppDispatch();
  const { categoriesType, categoryCurrent } = useAppSelector(
    (state) => state.categoriesState,
  );

  return (
    <ul>
      {categoriesData.map((category) => (
        <li
          onMouseEnter={() => dispatch(setCategoryCurrent(category.slug))}
          key={category.id}
          className={clsx(
            "hover:text-hover hover:border-b-hover cursor-pointer transition-colors last:border-b-0" +
              " border-tertiary border-b-[0.5px]",
          )}
        >
          <Link
            href={`/categories/${categoriesType}/${categoryCurrent}`}
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
