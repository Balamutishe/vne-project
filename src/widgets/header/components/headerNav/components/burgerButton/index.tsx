"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { DropdownMenuClose } from "@/widgets/dropdownMenu/components";
import { toggleDropdownMenuVisible } from "@/widgets/dropdownMenu/dropdownMenuSlice";
import BurgerSvg from "@/widgets/header/icons/burger.svg";

export const BurgerButton = () => {
  const dispatch = useAppDispatch();
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );

  return (
    <>
      {!isDropdownMenuVisible ? (
        <button
          className={"flex w-full cursor-pointer items-center justify-start"}
          onClick={() => {
            dispatch(toggleDropdownMenuVisible(true));
          }}
        >
          <BurgerSvg width={32} height={32} />
        </button>
      ) : (
        <DropdownMenuClose />
      )}
    </>
  );
};
