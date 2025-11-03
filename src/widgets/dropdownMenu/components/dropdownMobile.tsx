"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { CollectionListView } from "@/widgets/collections/components";
import { toggleDropdownMenuVisible } from "@/widgets/dropdownMenu/dropdownMenuSlice";
import UserSvg from "@/widgets/header/icons/user.svg";
import Link from "next/link";
import { NavList } from "@/widgets/header/components/headerNav/components";

export const DropdownMobile = () => {
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );
  if (!isDropdownMenuVisible) return null;

  return (
    <section className={"lg:hidden"}>
      <div
        className={
          "border-tertiary bg-background container-padding border-t-1 border-b-1"
        }
      >
        <NavList />
        <CollectionListView variant={"header"} />
      </div>
      <DropdownMobileFooter />
    </section>
  );
};

const DropdownMobileFooter = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authState);

  const handleSetVisibility = () => {
    dispatch(toggleDropdownMenuVisible(false));
  };

  return (
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
  );
};
