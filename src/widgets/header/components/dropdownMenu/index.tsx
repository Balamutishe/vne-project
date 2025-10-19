import { toggleDropdownMenuVisible } from "@/widgets/header/components/dropdownMenu/dropdownMenuSlice";
import Link from "next/link";
import { clsx } from "clsx";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { TGender } from "@/shared/types/categories";
import { toggleCollectionHeader } from "@/widgets/collections/collectionsSlice";
import { DropdownMenuClose } from "@/widgets/header/components/dropdownMenu/components";
import { CollectionListView } from "@/widgets/collections/components/collectionListView";
import UserSvg from "../../icons/user.svg";

export const DropdownMenuView = () => {
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );

  if (!isDropdownMenuVisible) return null;

  return (
    <>
      <section className={"hidden lg:block"}>
        <DropdownMenuDesktop />
      </section>
      <section className={"lg:hidden"}>
        <DropdownMenuMobile />
      </section>
    </>
  );
};

export const DropdownMenuDesktop = () => {
  const { collectionHeaderType } = useAppSelector(
    (state) => state.collectionsState,
  );

  return (
    <section className={"bg-background"}>
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
      <div className={"flex h-80 [&>*]:w-[23%]"}>
        <CollectionListView variant={"header"} />
      </div>
      <div className={"w-[54%]"}></div>
    </section>
  );
};

export const DropdownMenuMobile = () => {
  const { collectionHeaderType } = useAppSelector(
    (state) => state.collectionsState,
  );
  const dispatch = useAppDispatch();

  const navList: { name: string; value: TGender }[] = [
    { name: "ЖЕНЩИНАМ", value: "women" },
    { name: "МУЖЧИНАМ", value: "men" },
    { name: "АКСЕССУАРЫ", value: "unisex" },
  ];

  const handleSetVisibility = () => {
    dispatch(toggleDropdownMenuVisible(false));
  };

  return (
    <div>
      <div
        className={
          "border-tertiary bg-background container-padding border-t-1 border-b-1"
        }
      >
        <nav className={"flex"}>
          {navList.map((item) => (
            <button
              key={crypto.randomUUID()}
              className={clsx("border-tertiary w-1/3 border-b-3 py-2", {
                "border-zinc-950": collectionHeaderType === item.value,
              })}
              onClick={() => {
                dispatch(toggleCollectionHeader(item.value));
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <CollectionListView variant={"header"} />
      </div>
      <div className={"bg-background container-padding flex-center-between"}>
        <div
          className={
            "border-tertiary flex w-[90%] items-center justify-end border-r-1 px-3"
          }
        >
          <Link
            href={"/support"}
            className={"active:text-active py-1"}
            onClick={handleSetVisibility}
          >
            Помощь
          </Link>
        </div>
        <Link
          href={"/account"}
          className={"py-1"}
          onClick={handleSetVisibility}
        >
          <UserSvg
            className={"active:[&>path]:stroke-active"}
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
};
