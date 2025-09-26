import { useAppSelector } from "@/store/hooks";
import { AccessoriesListView } from "@/widgets/header/dropdownMenu/accessoriesList";
import { CategoriesListView } from "@/widgets/header/dropdownMenu/categoriesList";
import { DropdownMenuClose } from "@/widgets/header/dropdownMenu/dropdownMenuClose";

export const DropdownMenu = () => {
  const categoriesType = useAppSelector(
    (state) => state.headerState.categoriesType,
  );

  return (
    <section
      className={
        "bg-background absolute top-16 flex min-h-80 w-[1440px] flex-col border-t-1 border-zinc-950"
      }
    >
      <div className={"flex h-11.5 items-center border-b-1"}>
        <span
          className={"flex w-[23%] items-center border-zinc-950 px-13.5 py-2.5"}
        >
          {categoriesType !== "accessories" && "ОДЕЖДА"}
        </span>
        <span
          className={
            "flex w-[23%] items-center border-r-1 border-l-1 border-zinc-950 px-4 py-2.5"
          }
        >
          АКСЕССУАРЫ
        </span>
        <span
          className={"flex w-[54%] items-center justify-end px-13.5 py-2.5"}
        >
          <DropdownMenuClose />
        </span>
      </div>
      <div className={"flex h-80"}>
        <div className={"w-[23%] px-13.5 py-4"}>
          <CategoriesListView />
        </div>
        <div
          className={
            "w-[23%] border-r-1 border-l-1 border-zinc-950 px-4 py-2.5"
          }
        >
          <AccessoriesListView />
        </div>
      </div>
      <div className={"w-[54%]"}></div>
    </section>
  );
};
