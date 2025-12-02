"use client";

import { toggleDropdownMenuVisible } from "@/features/Dropdown/dropdownMenuSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import UserSvg from "@/widgets/header/icons/user.svg";
import Link from "next/link";

const DropdownFooter = () => {
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

export default DropdownFooter;
