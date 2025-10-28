import { TGender } from "@/shared/types/categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCollectionHeader } from "@/widgets/collections/collectionsSlice";
import { CollectionListView } from "@/widgets/collections/components";
import { toggleDropdownMenuVisible } from "@/widgets/dropdownMenu/dropdownMenuSlice";
import UserSvg from "@/widgets/header/icons/user.svg";
import { clsx } from "clsx";
import Link from "next/link";

export const DropdownMobile = () => {
  const { collectionHeaderType } = useAppSelector(
    (state) => state.collectionsState,
  );
  const { isAuth } = useAppSelector((state) => state.authState);

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
          href={isAuth ? "/account" : "/auth"}
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
